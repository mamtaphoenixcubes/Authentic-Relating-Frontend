// import axios from "axios";
// import OfferingsDetailsClient from "./OfferingsDetailsClient";

import { Suspense, use } from "react";
import OfferingsDetailsClient from "./OfferingsDetailsClient";

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getAllDetailsOffering?page=1&size=1000`
//     );

//     const data = await res.json();

//     console.log(data,"offrenig")

//     const offerings = data?.data?.detailsOfOfferings || [];

//     return offerings.map((item) => ({
//       slug: item.offeringSlug, // 👈 adjust this based on API
//     }));
//   } catch (error) {
//     console.error("Error generating offering params:", error);
//     return [];
//   }
// }



// async function getOffering(slug) {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getofferingbyslug/${slug}`,
//       { cache: "no-store" }
//     );

//     const {data} = await res.json();

    

//     // const offering = data.detailsOfOfferings?.find(
//     //   (item) => item.slug === slug
//     // );

//     return data || null;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }

// export default async function Page({ params }) {

//   const { slug } =await params;

//   const offering = await getOffering(slug);

//   if (!offering) {
//     return <div>Offering Not Found</div>;
//   }

//   return <OfferingsDetailsClient offering={offering} />;
// }

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://api.authenticrelating.com/frontendApis/getAllDetailsOfferingWithoutPagination",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("API Error:", res.status, res.statusText);
      return [];
    }

    const response = await res.json();

    const offerings = response?.detailsOfOfferings || [];

    console.log(
      "ALL SLUGS:",
      offerings.map((item) => item.offeringSlug)
    );

    return offerings.map((item) => ({
      slug: item.offeringSlug,
    }));

  } catch (error) {
    console.error("Error generating offering params:", error);
    return [];
  }
}

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
                <p style={{ color: '#666', fontSize: '16px' }}>Loading Offering details...</p>
            </div>
        </div>
    );
}


export default function Page({ params }) {
  const { slug } = use(params); // ✅ fixed

  return (
    <Suspense fallback={<LoadingFallback />}>
      <OfferingsDetailsClient slug={slug} />
    </Suspense>
  );
}