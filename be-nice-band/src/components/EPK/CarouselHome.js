import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault() {
  return (
    <div class="container max-w-96 max-h-54">
      <Carousel transition={{ duration: 0.5 }} autoplay={true} loop="true">
        <img
          src="images/replacementfastercars.JPG"
          alt="Fast Cars"
        />
        <img
          src="images/jamespolanem.jpg"
          alt="Live show"
          class="aspect-video	"
        />
        <img
          src="images/front3rockinbrixton.jpg"
          alt="Ghosts"
          class="aspect-video"
        />
        <img
          src="images/cool_pic.jpg"
          alt="Ghosts"
          class="aspect-video"
        />
        <img
          src="images/emhorns.jpg"
          alt="Ghosts"
          class="bg-cover"
        />
      </Carousel>
    </div>
  );
}
