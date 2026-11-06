'use client';

import { TermsandConditionsHero } from "./TermsandConditionsHero";
import { TermsandConditionsPage} from "./TermsandConditionsPage";


export default function TermsandConditions() {
  return (
    <div className=' p-0 pb-10 min-h-screen'>
        <section>
          <TermsandConditionsHero/>
          <TermsandConditionsPage/>
        </section>
    </div>
  );
}
