import { Carousel } from "@material-tailwind/react";
import * as React from "react";


export default function BeNiceLightBox() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="/images/ghosts1.JPG"
        alt="Ghosts Cover"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/fastcars3.JPG"
        alt="Fast Cars"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/jamesem.jpg"
        alt="Em at the Horn"
        className="h-full w-full object-cover"
      />
    </Carousel>

  );
}