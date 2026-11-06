import { Suspense, use } from 'react'; // Add use import
import EventInnerPage from './EventInnerPage';

// Loading component for Suspense
function LoadingFallback() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid #f3f3f3',
                    borderTop: '3px solid #8b944f',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 20px'
                }} />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `
                }} />
                <p style={{ color: '#666', fontSize: '16px' }}>Loading event details...</p>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getAllEvents?page=1&limit=1000`
    );

    const data = await res.json();

    const events = data?.data || [];

    return events.map((event) => ({
      slug: event.eventSlug, // 👈 IMPORTANT
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default function Page({ params }) {
    // Unwrap the params Promise using React.use()
    const { slug } = use(params);

    return (
        <Suspense fallback={<LoadingFallback />}>
            <EventInnerPage slug={slug} />
        </Suspense>
    );
}