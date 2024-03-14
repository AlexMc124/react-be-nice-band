import DialogDefault from "./Modal.js";
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
              class="size-1/6"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
            <div class="flex flex-col">
              <img src="Titles/flaminglogo.gif" alt="Flaming Text" />
              <img src="Titles/flamingsubtitle.gif" alt="Flaming Subtext" />
            </div>
            <img
              class="size-1/6"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
          </div>
        </div>

        <div class="container mx-auto p-10 text-left font-mono flex flex-col items-left justify-left text-m text-white sm:text-center dark:text-gray-400 p-10">
          <section class="mb-2">
            <div class="text-xl text-left underline">Intro</div>
            <div class="text-left indent-2 p-2 text-base/7">
            BE N!CE are a fresh London-based band colliding harsh flavours of punk with post-punk, 
            hardcore, grunge & alternative metal influences. If Bikini Kill & the Oozes merged with 
            Viagra Boys. Frequently compared to Wet Leg(?)....
            </div>
          </section>
          <div class="container mx-auto">
            <DialogDefault/>
          </div>
        </div>

        <div class="p-10">
          <section>
            <CarouselDefault />
          </section>
        </div>
      </div>
    </div>
  );
}
