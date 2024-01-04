import * as React from "react";
import "yet-another-react-lightbox/styles.css";

export default function BeNiceLightBox() {
  return (
    <>
      <CCarousel controls>
        <CCarouselItem>
            <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
        </CCarouselItem>
    </CCarousel>
    </>
  );
}