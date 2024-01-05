import CarouselDefault from "./Carousel.js";
import React from "react";
import "yet-another-react-lightbox/styles.css";

export default function EPK() {
  return (
    <div class="h-screen bg-gradient-to-r via-purple-500 from-indigo-500 to-blue-500">
      <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <img
              class="mt-10 size-24"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
            <img
              class="mt-10 ml-10 mr-10"
              src="Titles/flaminglogo.gif"
              alt="Flaming Text"
            />
            <img
              class="mt-10 size-24"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
          </div>
          <img
            class="flex flex-col h-16 items-center justify-centern"
            src="Titles/flamingsubtitle.gif"
            alt="Flaming Subtext"
          />
        </div>

        <div class="flex flex-col items-center justify-centern">
          <section class="text-gray-600 body-font p-3">
            BE NICE R FREAKING COOL AND PLAY LOTS OF GIGS AND FUCK ALOT
          </section>
        </div>
        <div class="mb-20">
          <section>
            <CarouselDefault />
          </section>
        </div>
      </div>
    </div>
  );
}
