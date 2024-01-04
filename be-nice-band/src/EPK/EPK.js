import BeNiceLightBox from "./Carousel.js";
import React from "react";
import "yet-another-react-lightbox/styles.css";

export default function EPK() {
  return (
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-centern">
        <img class="mt-10" src="BackgroundImages/flaminglogo.gif" alt="Logo" />
      </div>

      <div class="flex flex-col items-center justify-centern">
        <section class="text-gray-600 body-font mt-20">
          BE NICE R FREAKING COOL AND PLAY LOTS OF GIGS AND FUCK ALOT
        </section>
      </div>
      <div>
        <BeNiceLightBox />
      </div>
    </div>
  );
}
