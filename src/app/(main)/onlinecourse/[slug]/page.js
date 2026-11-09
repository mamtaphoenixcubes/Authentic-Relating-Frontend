import { use } from "react";
import CourseDetailsPage from "./CourseDetailsPage";


export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/GetCourseallpublic`,
    );

    const data = await res.json();

    const courses = data?.course || [];

    return courses
      .filter((course) => course?.courseSlug)
      .map((course) => ({
        slug: course.courseSlug,
      }));

  } catch (error) {
    console.error("❌ Error generating params:", error);
    return [];
  }
}

export default function Page({ params }) {
  const { slug } = use(params);

  return (
    <div className="pb-10 min-h-screen">
      <CourseDetailsPage slug={slug}/>
    </div>
  );
}