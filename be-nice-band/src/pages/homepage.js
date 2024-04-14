import React from "react";
import CarouselDefault from "../components/EPK/Carousel.js";
import "yet-another-react-lightbox/styles.css";

const HomePage = () => {
  return (
    <>
      <div class="h-screen bg-cover bg-centre bg-[url('BackgroundImages/homepagebackground.JPG')] h-full" />
      <div class="h-screen bg-gray-500 h-full grid grid-cols-2 divide-x">
        <div>
          <h1 class="text-4xl font-extrabold text-white text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto p-5">
            Latest Music
          </h1>
          <div class="container w-5/6 p-10 bg-gray-700 text-white rounded">
            Our latest single, "Bedtime" is out now on all streaming platforms!
            A seesaw of a song bouncing between hypnotic funky verses and
            frustrated gritty choruses with on-the-nose lyrics that reveal their
            honest feelings as the self-described “sleepiest band on earth”.
          </div>
          <div class="container h-1/2 w-1/2 h-max-1/2 w-max-1/2 p-5">
            <img
              src="images/bedtime_artwork.jpeg"
              alt="Bedtime Single Artwork"
            />
          </div>
          <div class="container p-5 w-5/6 bg-gray-700 text-white rounded">
            Recorded & mixed by Big Fig Studio’s <b>Jake Stanton</b>, as well as
            mastered by <b>Arran Dutt</b>, the band have been aided in bringing
            their best live sound to the record, achieving a final result that
            exceeds the quality of their previous singles.
          </div>
          <div class="container p-5 mt-1 w-5/6 bg-gray-700 text-white rounded text-center align-centre">
            🤘
            <b>
              <u>
                <a href="www.benice.band">Listen Now!</a>
              </u>
            </b>
            🤘
          </div>
        </div>
        <div>
          <h1 class="text-4xl font-extrabold text-white text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto p-5">
            Linktree
          </h1>
          <div class="container p-5 mt-1 w-5/6 bg-gray-700 text-white rounded text-center align-centre">
            Heres some Links to our socials
          </div>
        </div>
      </div>
      <div class="bg-cover pb-10 items-center justify-center bg-centre bg-[url('BackgroundImages/homepagebackground.JPG')] h-full text-center p-5">
        <h1 class="text-4xl inline-block font-extrabold text-white bg-black self-center text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto p-5 text-center align-centre">
          Upcoming Gigs
        </h1>
        <div class="container p-5">
          <a
            href="https://www.songkick.com/artists/10250591"
            class="songkick-widget"
            data-theme="dark"
            data-track-button="on"
            data-detect-style="off"
            data-background-color="rgb(0,0,0,1)"
            data-font-color="rgb(255,255,255,1)"
            data-button-bg-color="rgb(255,255,255,1)"
            data-button-text-color="rgb(0,0,0,1)"
            data-locale="en"
            data-other-artists="on"
            data-share-button="on"
            data-country-filter="on"
            data-rsvp="on"
            data-request-show="on"
            data-past-events="off"
            data-past-events-offtour="off"
            data-remind-me="off"
            style={{ display: "none" }}
          >
            Be Nice!
          </a>
          <script src="//widget-app.songkick.com/injector/10250591"></script>
        </div>
      </div>
      <div class="h-screen bg-gray-500 h-full">
        <h1 class="text-4xl font-extrabold text-white text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto p-5">
          Picture Gallery
        </h1>
        <div class="p-10 h-100 w-100">
          <CarouselDefault />
        </div>
      </div>
    </>
  );
};

export default HomePage;
