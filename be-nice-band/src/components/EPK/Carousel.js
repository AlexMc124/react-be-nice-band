import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefault() {
  return (
    <Carousel transition={{ duration: 0.5 }} autoplay={true} loop="true" className="z-0 rounded-xl h-1/4">
      <img
        src="images/fastcars3.JPG"
        alt="Fast Cars"
        className="h-full w-full object-cover"
      />
      <img
        src="images/jamespolanem.jpg"
        alt="Live show"
        className="h-full w-full object-cover"
      />
      <img
        src="images/noghosts2.JPG"
        alt="Ghosts"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

