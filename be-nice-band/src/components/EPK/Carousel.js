import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault() {
  return (
    <div class="container max-w-96 max-h-54">
      <Carousel transition={{ duration: 0.5 }} autoplay={true} loop="true">
        <img
          src="images/replacementfastercars.JPG"
          alt="Fast Cars"
          className="z-0 rounded-xl h-1/4"
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
      </Carousel>
    </div>
  );
}
