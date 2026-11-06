'use client';

import LatestEpisodes from "./LatestEpisodes";
import PodcastHero from "./PodcastHero";
import StayUpdated from "./StayUpdated";
import WeTalkAbout from "./WeTalkAbout";

export default function Podcastpage() {
  return (
    <div className=' p-0 pb-10 min-h-screen'>
        <section>
            <PodcastHero/>
            <WeTalkAbout/>
            <LatestEpisodes/>
            <StayUpdated/>
        </section>
    </div>
  );
}
