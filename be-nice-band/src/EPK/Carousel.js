import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefault() {
  return (
    <Carousel transition={{ duration: 0.5 }} autoplay={true} className="rounded-xl h-1/4">
      <img
        src="images/fastcars3.JPG"
        alt="Fast Cars"
        className="h-full w-full object-cover"
      />
      <img
        src="images/jamespolanem.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="images/noghosts2.JPG"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

