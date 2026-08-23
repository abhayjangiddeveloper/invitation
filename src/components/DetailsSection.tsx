"use client";

import { CARD_INFO } from "@/utils/constant";
import React from "react";

export default function DetailsSection() {
  return (
    <section className="details-section" id="detailsSection">
      <div className="content-container">
        {/* Bismillah */}
        <div className="bismillah-arabic">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
        <div className="bismillah-english">
          In the name of Allah, the Most Gracious, the Most Merciful
        </div>

        <p className="invite-intro">
          With the blessings of Almighty Allah,
          <br />
          Together with their families, we cordially invite you to celebrate the
          <br />
          Nikah &amp; Valima ceremony of
        </p>

        {/* Groom Card */}
        <div className="person-card">
          <div className="card-role-label">The Groom</div>
          <h2 className="person-name">{CARD_INFO.groomName}</h2>
          <div className="person-degree">B.Com. (Computers), KSA</div>
          <div className="person-parent-divider" />
          <div className="parent-title-label">Son of</div>
          <div className="parent-name">Mrs. &amp; Mr. Syed Azam Sahab</div>
          <div className="parent-qualification">M.Tech. (Structures)</div>
        </div>

        {/* Decorative Ampersand */}
        <div className="card-ampersand-divider">&amp;</div>

        {/* Bride Card */}
        <div className="person-card">
          <div className="card-role-label">The Bride</div>
          <h2 className="person-name">{CARD_INFO.brideName}</h2>
          <div className="person-degree">M.A</div>
          <div className="person-parent-divider" />
          <div className="parent-title-label">Daughter of</div>
          <div className="parent-name">Mrs. &amp; Mr. Dr. Syed Shaker Arif</div>
          <div className="parent-qualification">M.A., M.Ed., SET, Ph.D.</div>
          <div className="parent-designation">
            Class I Officer, Education Department, Nanded
          </div>
        </div>

        {/* Hadith Section */}
        <div className="hadith-card">
          <div className="hadith-arabic">
            عَنِ ابْنِ عَبَّاسٍ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ
            عَلَيْهِ وَسَلَّمَ:
            <br />
            &quot; لَمْ نَرَ لِلْمُتَحَابَّيْنِ مِثْلَ النِّكَاحِ &quot;
          </div>
          <div className="hadith-english">
            It was narrated from Ibn Abbas that the Messenger of Allah (ﷺ) said:
          </div>
          <div className="hadith-quote">
            &quot;There is nothing like marriage, for two people who love one
            another.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
