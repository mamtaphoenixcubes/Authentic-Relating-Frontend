import BlogInnerpage from "./BlogInnerpage";
import axios from "axios";

// ✅ STATIC PARAMS
export async function generateStaticParams() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getblogs`,
      {
        params: { page: 0, limit: 100, search: "", category: "" },
      }
    );

    const blogs = res?.data?.data?.blogs || [];

    if (!blogs.length) {
      return [{ slug: "fallback-blog" }];
    }

    return blogs.map((blog) => ({
      slug: blog.blogSlug,
    }));
  } catch (error) {
    console.error(error);
    return [{ slug: "fallback-blog" }];
  }
}

// 🔽 FIXED (no no-store)
async function getBlog(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getblogbyslug/${slug}`
    );

    if (!res.ok) return null;

    const { data } = await res.json();

    return data || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// 🔽 FIXED (no no-store)
async function getRelatedBlogs(categoryId, currentSlug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getblogs?size=100&page=0&search=`
    );

    const { data } = await res.json();
    const allBlogs = data?.blogs || [];

    const sameCategory = allBlogs.filter((blog) => {
      const blogCategoryId =
        typeof blog.category_id === "object"
          ? blog.category_id?._id
          : blog.category_id;

      return blogCategoryId === categoryId && blog.blogSlug !== currentSlug;
    });

    return sameCategory.slice(0, 3);
  } catch (err) {
    console.error(err);
    return [];
  }
}

// 🔽 FIXED PAGE
export default async function Page({ params }) {
  const { slug } =await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return <div className="container py-20">Blog not found</div>;
  }

  const categoryId =
    typeof blog.category_id === "object"
      ? blog.category_id?._id
      : blog.category_id;

  const relatedBlogs = categoryId
    ? await getRelatedBlogs(categoryId, slug)
    : [];

  return (
    <div className="p-0 pb-10 font-sans min-h-screen">
      <BlogInnerpage data={blog} relatedBlogs={relatedBlogs} />
    </div>
  );
}