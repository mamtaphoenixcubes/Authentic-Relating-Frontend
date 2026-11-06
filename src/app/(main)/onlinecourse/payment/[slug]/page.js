// import CoursePaymentPage from "./CoursePaymentPage";

// import axios from "axios";

// export async function generateStaticParams() {
//   try {
//     const res = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/GetCourseAll`,
//       {
//         params: { page: 1, size: 10 },
//       }
//     );

//     const courses = res.data?.courses || [];

//     if (!courses.length) {
//       console.warn("No courses found — fallback");
//       return [{ slug: "fallback-course" }];
//     }

//     return courses.map((course) => ({
//       slug: course.courseSlug,
//     }));
//   } catch (error) {
//     console.error("Error generating params:", error);
//     return [{ slug: "fallback-course" }];
//   }
// }

// async function getAllCourses() {
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/GetCourseAll?page=1&size=1000`
//     );

//     const data = await res.json();
//     return data?.courses || [];
// }

// export default async function Page({ params }) {
//     const { slug } = await params;

//     const courses = await getAllCourses();

//     const course = courses.find(c => c.courseSlug === slug);

//     if (!course) {
//         return <div>Course not found</div>;
//     }
//     if(!slug){
//       <div>Course not found</div>;
//     } 

//     return <CoursePaymentPage slug={slug} />;
// }


// import CoursePaymentPage from "./CoursePaymentPage";
// import axios from "axios";

// export async function generateStaticParams() {
//   try {
//     const res = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/GetCourseallpublic`,
//     );

//     // ✅ FIXED (no .json)
//     const courses = res.data?.courses;

//     console.log("Courses for static params:", courses);

//     // ✅ If API works
//     if (courses.length > 0) {
//       return courses
//         .filter((course) => course?.courseSlug)
//         .map((course) => ({
//           slug: course.courseSlug,
//         }));
//     }

//     // ⚠️ FALLBACK (MANDATORY for export)
//     console.warn("⚠️ No courses found, using fallback");

//     return [{ slug: "fallback-course" }];

//   } catch (error) {
//     console.error("Error generating params:", error);

//     // ⚠️ MUST return something
//     return [{ slug: "fallback-course" }];
//   }
// }

// export default async function Page({ params }) {
//   const { slug } = params; // ✅ FIXED (no await)

//   if (!slug) {
//     return <div>Course not found</div>;
//   }

//   return <CoursePaymentPage slug={slug} />;
// }


import { use } from "react";
import CoursePaymentPage from "./CoursePaymentPage";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/GetCourseallpublic`,
    );

    const data = await res.json();

    // console.log("COURSE RESPONSE:", data);

    const courses = data?.course || [];

    if (!courses.length) {
      console.warn("⚠️ No courses found");
      return [];
    }

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

  if (!slug) {
    return <div>Course not found</div>;
  }

  return <CoursePaymentPage slug={slug} />;
}