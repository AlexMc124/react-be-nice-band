import CarouselDefault from "./Carousel.js";
import React from "react";
import "yet-another-react-lightbox/styles.css";

export default function EPK() {
  return (
    <div class="bg-gradient-to-r via-purple-500 from-indigo-500 to-blue-500">
      <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <img
              class="size-32"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
            <div class="flex flex-col">
              <img
                  src="Titles/flaminglogo.gif"
                  alt="Flaming Text"
                />
                <img
                src="Titles/flamingsubtitle.gif"
                alt="Flaming Subtext"
                />
              </div>
            <img
              class="size-32"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
          </div>
          
        </div>

        <div class="container mx-auto p-10 text-left font-mono mb-9 flex flex-col items-left justify-left text-m text-white sm:text-center dark:text-gray-400 p-10">
          <section class="mb-2">
            <div class="text-xl text-left underline">Intro</div>
            <div class="text-left indent-2 p-2 text-base/7">
              BE NICE isn't just a band name, it's a movement. Hailing from
              London, this silly-punk outfit crafts music that's equal parts
              infectious grooves and hard riffs, urging listeners to embrace
              kindness and understanding in a world that often feels divided.
            </div>
          </section>

          <section class="mb-2">
            <div class="text-xl text-left underline">Meet the Band</div>
            <ul class="text-left p-2 text-base/7">
              <li>
                <strong>Pol:</strong> Heart and Soul of the band, with craking
                vocals and sweet dance moves
              </li>
              <li>
                <strong>Brett:</strong> Cold Shredding Guitarist, riff killer
                slaying daily
              </li>
              <li>
                <strong>Emily:</strong> Bass Master Extrodinaire and all around
                cool person
              </li>
              <li>
                <strong>Alex:</strong> High Energy and loud, Alex has been
                playing in bands for years.
              </li>
            </ul>
          </section>

          <section class="mb-2">
            <div class="text-xl text-left underline">Musical Journey</div>
            <div class="text-left p-2 text-base/7">
              Forming in December 2022, BE NICE has been on a musical journey
              playing around London and the surrounding areas.
              <br></br>
              Playing original music, BE NICE played their first gig at the
              Rebel Inn in Dec 2022, before going on to play 30 gigs in 2023.
              Now focusing on writing and recording, BE NICE are looking forward
              to releasing new music in 2024
            </div>
          </section>

          <section class="mb-2">
            <div class="text-xl text-left underline">Sound & Style</div>
            <div class="text-left p-2 text-base/7">
              BE NICE's sound is a sonic tapestry woven with the legacy of Punk
              music with a modern twist, but their true magic lies in their
              ability to seamlessly blend raw emotion with danceable rhythms.
              Their music is a call to action, urging listeners to treat each
              other with kindness .... OR ELSE!!!
            </div>
          </section>

          <section  class="mb-2">
            <div class="text-xl text-left underline">
              Accolades & Achievements
            </div>
            <ul class="text-left p-2 text-base/7">
              <li>Playing at the Amersham Arms</li>
              <li>Playing at the Six Six Bar</li>
              <li>Releasing 3 singles</li>
              <li>1000 streams on Spotify for first single</li>
              <li>750 Instagram followers</li>
            </ul>
          </section>

          <div class="text-left indent-2 text-base/7">
            BE NICE is more than just a band; they're a community. Join them on
            their journey of musical exploration and spread the message of
            kindness, one infectious beat at a time.
          </div>

          <div class="text-centre indent-2 text-base/7">
            JOIN TODAY AND START BEING NICE!!!
          </div>

        </div>
        
        <div>
          <section>
            <CarouselDefault />
          </section>
        </div>
      </div>
    </div>
  );
}
