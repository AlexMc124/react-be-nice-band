import React from "react";
import "yet-another-react-lightbox/styles.css";
import { useEffect } from "react";

export default function News() {
  useEffect(() => {
    document.title = "Be Nice! - News";
  }, []);

  return (
    <>
      <div class="bg-gradient-to-r from-gray-900 to-gray-700 pt-10 ">
        <div class="container h-full p-10 bg-grey text-black rounded text-left font-sans flex flex-col items-left justify-left text-m sm:text-center dark:text-gray-400">
          {/* Story one */}
          <a href="https://open.spotify.com/track/6MzhseNGoXfehCpAUd3Jje?si=f540d8db03294fb0">
          <div class="container p-5 mb-10 bg-gray-900 rounded hover:scale-110 transition-transform duration-500 ease-in-out">
            <div class=" text-white text-4xl">Release of BEDTIME!</div>
            <div class="row-span-2 flex items-center">
              <div class="text-white w-1/4">
                <a href="https://open.spotify.com/track/6MzhseNGoXfehCpAUd3Jje?si=f540d8db03294fb0" >
                <img
                  src="images/bedtime_artwork.jpeg"
                  class="h-60 w-60 rounded p-5 "
                  alt="Bedtime Cover Art"
                ></img></a>
              </div>
              <div class="text-white p-5 w-3/4">
                Underground & unsigned seriously silly London-based 4-piece punk
                band BE N!CE is excited to be announcing the release of their
                latest single BEDTIME. A seesaw of a song bouncing between
                hypnotic funky verses and frustrated gritty choruses with
                on-the-nose lyrics that reveal their honest feelings as the
                self-described “sleepiest band on earth”.<br/>
                <br/>Releasing on the 17th
                of April 2024, this satirical and relatable comment on being
                overworked and overstimulated to the point of exhaustion and
                giving up responsibilities is BE N!CE’s first professionally
                produced single. The frustration imbued through the highs and
                lows of the song, combined with the bluntly honest lyrics, make
                for a relatable punky tune with explorative hints of funk &
                post-punk. The theme of exasperation is present throughout and
                reaches breaking point in the final screamy crescendo.
              </div>
            </div>
          </div>
          </a>
          {/* Story two */}
          <div class="container p-5 mb-10 bg-gray-900 rounded hover:scale-110 transition-transform duration-500 ease-in-out">
            <div class=" text-white text-4xl">HellFest Audition</div>
            <div class="row-span-2 flex items-center">
              <div class="text-white w-1/2">
                <img
                  src="images/hellfest1.jpeg"
                  class="rounded p-5"
                  alt="Bedtime Cover Art"
                ></img>
              </div>
              <div class="text-white p-5 w-1/2">
                We played at Hellfest auditions in London on the 27th of March, with 
                a setlist of our most popular songs. The venue was packed with
                people, and we had a great time playing. We were able to showcase
                our music to a new audience and received positive feedback from
                the judges. We are excited about the possibility of playing at
                Hellfest and are looking forward to the opportunity to perform
                for a larger audience. We are grateful for the support of our fans!
                <br/>
                <br/>
                We played with several really cool bands, and it was a great
                experience to be part of such a diverse lineup. We are proud of
                our performance and are very happy for Manic Aggression, who won
                the competition. We wish them the best of luck at Hellfest and
                hope to see them there!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
