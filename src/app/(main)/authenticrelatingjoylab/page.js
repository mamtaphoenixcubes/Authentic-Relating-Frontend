'use client';

import { AuthenticRelatingJoyLabHero } from "./AuthenticRelatingJoyLabHero";
import JoyLabHighlights from "./JoyLabHighlights";
import JoyLabSection from "./JoyLabSection";
import PlaygroundSection from "./PlaygroundSection";


export default function AuthenticRelatingJoyLab() {
  return (
    <div className=' p-0 bg-[#fff] pb-10 min-h-screen'>
        <section>
            <AuthenticRelatingJoyLabHero/>
            <PlaygroundSection/>
            <JoyLabSection/>
            <JoyLabHighlights/>
        </section>
    </div>
  );
}
