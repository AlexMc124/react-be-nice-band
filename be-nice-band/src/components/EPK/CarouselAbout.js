import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault() {
  return (
    <div class="container max-w-96 max-h-54">
      <Carousel transition={{ duration: 0.5 }} autoplay={true} loop="true">
        <img
          src="images/hellfest1.jpeg"
          alt="Hellfest"
          class="aspect-video"
        />
        <img
          src="images/bedtime1.jpg"
          alt="Bedtime"
          class="aspect-video"
        />
        <img
          src="images/beniceandectopeach.jpg"
          alt="Be Nice and Ecto Peach"
          class="bg-cover"
        />
        <img
          src="images/brettcloseup.JPG"
          alt="Brett"
        />
        <img
          src="images/jamesbrettandpol.jpg"
          alt="Live show"
          class="aspect-video	"
        />
      </Carousel>
    </div>
  );
}
