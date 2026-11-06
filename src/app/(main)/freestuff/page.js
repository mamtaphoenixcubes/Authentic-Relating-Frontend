'use client';

import FreeStuffpage from "./FreeStuffpage";
import { FreeStuffHero } from "./FreeStuffHero";
import VideoCollection from "./VideoCollection";


export default function FreeStuff() {
  return (
    <div className=' p-0  min-h-screen'>
        <section>
            <FreeStuffHero/>
            <FreeStuffpage/>
            <VideoCollection/>
        </section>
    </div>
  );
}
