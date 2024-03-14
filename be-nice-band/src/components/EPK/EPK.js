import DialogDefault from "./Modal.js";
import CarouselDefault from "./Carousel.js";
import React from "react";
import "yet-another-react-lightbox/styles.css";

export default function EPK() {
  return (
    <div class="bg-gradient-to-r via-purple-500 from-indigo-500 to-blue-500 pt-10">
      <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <img
              class="size-1/8"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
            <div class="flex flex-col">
              <img src="Titles/flaminglogo.gif" alt="Flaming Text" />
              <img src="Titles/flamingsubtitle.gif" alt="Flaming Subtext" />
            </div>
            <img
              class="size-1/8"
              src="Titles/teddy-bear-butterfly.gif"
              alt="Flaming Text"
            />
          </div>
        </div>

        <div class="container mx-auto p-10 text-left font-mono flex flex-col items-left justify-left text-m text-white sm:text-center dark:text-gray-400 p-10">
          <section class="mb-2">
            <div class="text-xl text-left underline">Intro</div>
            <div class="text-left indent-2 p-2 text-base/7">
              BE N!CE are a London-based band colliding harsh flavours of punk
              with post-punk, hardcore, grunge & alternative metal influences,
              towing the line between writing about important personal & social
              issues whilst not taking themselves too seriously. 
            </div>
            <div class="text-left indent-2 p-2 text-base/7">
            The band have
              carved out their own style in the alternative scene, using colour
              & fun to push back against a bleak social climate, having begun
              like most punk bands wanting to release pent up frustration. Their
              songs cover a variety of topics ranging from mental health, social
              injustice, sexual harassment and being sleepy, made distinct
              through each member’s own unique musical contribution thanks to a
              wide range of influences while having overtones of Bikini Kill,
              The Oozes and Witch Fever. In their first year, the band made
              their mark in the DIY London-scene and grew a small but loyal
              following. They intend to make 2024 the year of BE N!CE.
              </div>
          </section>
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
