function SongKick() {
  return (
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
    ></a>
  );
}

export default function LiveDatesSection() {
  return (
    <div class="h-screen bg-space-background bg-cover">
      <div
        className="live-dates-section"
        class="container mx-auto p-10 text-center mb-9"
      >
        <h1 className="mb-5 text-4xl font-extrabold text-white align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto">
          Live Dates
        </h1>
        {/* {live_dates.map((live_date) => (
          <section
            className="live-dates-section__container"
            class="w-full align-centre"
          >
            <div
              className="live-dates-section__gig"
              class="mb-9 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white"
            >
              <h3>
                {live_date.location.toUpperCase()} -{" "}
                {live_date.venue.toUpperCase()} - {live_date.date.toUpperCase()}{" "}
                -{" "}
                <a class="bg-sky-500 hover:bg-sky-700" href={live_date.tickets}>
                  TICKETS
                </a>
              </h3>
              <div>{live_date.description} </div>
            </div>
          </section>
        ))} */}
      </div>
      <SongKick />
    </div>
  );
}
