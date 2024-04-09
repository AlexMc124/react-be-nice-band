import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault() {
  return (
    <Carousel
      transition={{ duration: 0.5 }}
      autoplay={true}
      loop="true"
    >
      <img
        src="images/replacement_for_faster_cars.JPG"
        alt="Fast Cars"
        class="aspect-video"
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
  );
}
