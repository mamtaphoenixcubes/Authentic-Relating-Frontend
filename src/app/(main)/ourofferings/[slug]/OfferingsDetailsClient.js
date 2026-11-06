"use client";

import { useEffect, useState } from "react";
import DiscountBanner from "./DiscountBanner";
import OfferingsHeroBanner from "./OfferingsHeroBanner";
import OfferingsInnerDetail from "./OfferingsInnerDetail";
import OfferingsMoreSessions from "./OfferingsMoreSessions";

export default function OfferingsDetailsClient({ slug }) {
  const [offering, setOffering] = useState(null);
  const [loading, setLoading] = useState(true);

  const getOffering = async (slug) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getofferingbyslug/${slug}`
      );

      const { data } = await res.json();
      console.log(data, "dattttt");

      return data || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    if (!slug) return;

    const fetchOffering = async () => {
      setLoading(true);
      const data = await getOffering(slug);
      setOffering(data);
      setLoading(false);
    };

    fetchOffering();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!offering) {
    return <div>Offering Not Found</div>;
  }

  return (
    <div className="pb-10 min-h-screen">
      <section>
        <OfferingsHeroBanner offering={offering} />
        <OfferingsInnerDetail offeringData={offering} />
        <DiscountBanner />
        <OfferingsMoreSessions offering={offering} />
      </section>
    </div>
  );
}