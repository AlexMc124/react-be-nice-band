const live_dates = [
  {
    location: "London, UK",
    venue: "The Finsbury",
    date: "2021-10-01",
    tickets: "https://www.eventbrite.co.uk/e/163973001837",
    description: "",
  },
  {
    location: "London, UK",
    venue: "The Finsbury",
    date: "2021-10-01",
    tickets: "https://www.eventbrite.co.uk/e/163973001837",
    description: "",
  },
];

export default function LiveDatesSection() {
  return (
    <div className="live-dates-section" class="container mx-auto p-10">
      {/* make something that generates a list of gigs based on each of the entries in the live_dates obj */}
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white centre">
        Live Dates
      </h1>
      {live_dates.map((live_date) => (
        <section
          className="live-dates-section__container"
          class="w-full align-centre"
        >
          <div
            className="live-dates-section__gig"
            class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
          >
            <div>{live_date.location}</div>
            <div>{live_date.venue}</div>
            <div>{live_date.date}</div>
            <div>{live_date.tickets}</div>
            <div>{live_date.description}</div>
          </div>
        </section>
      ))}
    </div>
  );
}
