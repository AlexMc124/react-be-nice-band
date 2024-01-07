export default function LiveDatesSection() {
  return (
    <div class="h-screen bg-center bg-space-background bg-cover">
      <div
        className="live-dates-section"
        class="container mx-auto p-10 text-center mb-9"
      >
        <h1 className="mb-5 text-4xl font-extrabold text-white align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto">
          Live Dates
        </h1>
      </div>
      <div class="container mx-auto p-10 text-center mb-9">
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
        data-past-events="on"
        data-past-events-offtour="off"
        data-remind-me="on"
        />
      </div>
    </div>
  );
}
