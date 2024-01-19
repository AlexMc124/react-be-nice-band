import {BrowserView, MobileView} from 'react-device-detect';

export default function LiveDatesSection() {
  return (
    <div class="h-screen bg-center bg-space-background bg-cover">
      <div
        className="live-dates-section"
        class="container mx-auto p-10 text-center"
      >
      <div class="flex flex-col items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <img
              class="size-1/4"
              src="Titles/3dgifmaker96154.gif"
              alt="flip logo"
            />
            <div class="flex flex-col">
              <h1 className="text-4xl font-extrabold text-white align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto">
                Live Dates
              </h1>
            </div>
            <img
              class="size-1/4"
              src="Titles/3dgifmaker96154.gif"
              alt="flip logo"
            />
          </div>
        </div>
        
      </div>
      <div class="container mx-auto p-10 text-center mb-9">
      <MobileView>
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
        ><i class="fa fa-phone" aria-hidden="true"></i> </a>
        <script src="//widget-app.songkick.com/injector/10250591"></script>
      </MobileView>
      <BrowserView>
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
        ><i class="fa fa-phone" aria-hidden="true"></i> </a>
      <script src="//widget-app.songkick.com/injector/10250591"></script>
      </BrowserView>
      </div>
    </div>
  );
}
