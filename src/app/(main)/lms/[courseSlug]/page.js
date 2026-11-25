import LMSCoursePlayer from './components/LMSCoursePlayer';

export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');
    if (!apiUrl) {
      console.warn('NEXT_PUBLIC_API_URL is not set; no LMS routes can be generated.');
      return [];
    }

    const response = await fetch(`${apiUrl}/frontendApis/GetCourseallpublic`);
    if (!response.ok) {
      throw new Error(`Course catalog request failed (${response.status}).`);
    }

    const data = await response.json();
    const courses = Array.isArray(data?.course)
      ? data.course
      : Array.isArray(data?.courses)
        ? data.courses
        : [];

    return courses
      .filter((course) => typeof course?.courseSlug === 'string' && course.courseSlug.trim())
      .map((course) => ({ courseSlug: course.courseSlug.trim() }));
  } catch (error) {
    console.error('Failed to generate LMS course routes:', error);
    return [];
  }
}
export default async function LMSPage({ params }) {
  const { courseSlug } = await params;
  return <LMSCoursePlayer courseSlug={courseSlug} />;
}
