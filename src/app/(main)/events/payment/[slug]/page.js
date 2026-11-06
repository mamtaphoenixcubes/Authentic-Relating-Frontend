import EventsPaymentsPage from './EventsPaymentsPage';

export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.error('NEXT_PUBLIC_API_URL is not defined');
      return [];
    }

    const res = await fetch(
      `${apiUrl}/frontendApis/getAllEvents?page=1&limit=1000`
    );

    if (!res.ok) {
      console.error(
        `Failed to fetch events: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data = await res.json();

    const events = data?.data || [];

    return events
      .filter((event) => event?.eventSlug)
      .map((event) => ({
        slug: String(event.eventSlug),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default function Page() {
  return <EventsPaymentsPage />;
}