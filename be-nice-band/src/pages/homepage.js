import React from "react";
import CarouselDefault from "../components/EPK/CarouselHome.js";
import "yet-another-react-lightbox/styles.css";
import { useEffect } from "react"

const HomePage = () => {
  useEffect(() => {
    document.title = "Be Nice! - Home Page"
  }, [])

  return (
    <>
      <div class="h-screen bg-cover bg-centre bg-[url('BackgroundImages/homepagebackground.JPG')] h-full">
        <div class="container h-full content-end text-center p-10">
          <a href="https://linktr.ee/be_nice">
            <button
              class="bg-gray-900 text-6xl hover:bg-gray-400 text-white font-bold py-2 px-4 rounded self-center text-center align-centre"
              type="button"
              variant="contained"
            >
              LinkTree
            </button>
          </a>
        </div>
      </div>
      <div class="items-center justify-center text-center bg-gray-800 p-5">
        <h1 class="text-4xl inline-block font-extrabold text-white bg-gray-900 self-center text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto p-5 text-center align-centre rounded mb-2">
          Latest Music
        </h1>
        <div class="container h-1/2 w-1/2 h-max-1/2 w-max-1/2 p-5">
          <img src="images/bedtime_artwork.jpeg" alt="BEDTIME Single Artwork" />
        </div>
        <div class="container p-5 w-5/6 bg-gray-900 text-white rounded">
          Recorded & mixed by Big Fig Studio’s <b>Jake Stanton</b>, as well as
          mastered by <b>Arran Dutt</b>
        </div>
        <div class="container p-5 mt-1 w-5/6 bg-gray-900 text-white rounded text-center align-centre rounded">
          🤘
          <b>
            <u>
              <a href="www.benice.band">Listen Now!</a>
            </u>
          </b>
          🤘
        </div>
      </div>
      <div class="bg-cover pb-10 items-center justify-center text-center bg-centre bg-[url('BackgroundImages/homepagebackground.JPG')] h-full p-5">
        <h1 class="text-4xl font-extrabold text-white bg-gray-900 inline-block self-center text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto p-5 rounded">
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
      <div class="h-screen bg-gray-800 h-full items-center justify-center text-center p-5">
        <h1 class="text-4xl inline-block font-extrabold text-white bg-black self-center text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto p-5 text-center align-centre">
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