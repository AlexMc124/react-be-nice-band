import CarouselDefault from "./Carousel.js";
import React from "react";
import "yet-another-react-lightbox/styles.css";

export default function EPK() {
  return (
    <div class="bg-gradient-to-r from-gray-900 to-gray-700 pt-10">
      <div class="container p-10 text-left font-sans flex flex-col items-left justify-left text-m text-white sm:text-center dark:text-gray-400 p-10">
        <section class="mb-2">
          <div class="text-left indent-2 p-2 text-base/7">
            BE N!CE are a London-based band colliding harsh flavours of punk
            with post-punk, hardcore, grunge & alternative metal influences,
            towing the line between writing about important personal & social
            issues whilst not taking themselves too seriously.
          </div>
          <div class="text-left indent-2 p-2 text-base/7">
            The band have carved out their own style in the alternative scene,
            using colour & fun to push back against a bleak social climate,
            having begun like most punk bands wanting to release pent up
            frustration. Their songs cover a variety of topics ranging from
            mental health, social injustice, sexual harassment and being sleepy,
            made distinct through each member’s own unique musical contribution
            thanks to a wide range of influences while having overtones of
            Bikini Kill, The Oozes and Witch Fever.
          </div>
        </section>
      </div>

      <div class="p-10 h-100 w-100">
          <CarouselDefault />
      </div>
    </div>
  );
}
