const live_dates = [
  {
    location: "London, UK",
    venue: "THE HORN",
    date: "2024-09-01",
    tickets: "https://www.eventbrite.co.uk/e/163973001837",
    description: "",
  },
  {
    location: "Chatham, UK",
    venue: "Poco Loco",
    date: "2024-13-01",
    tickets: "https://www.eventbrite.co.uk/e/163973001837",
    description: "",
  },
  {
    location: "Colchester, UK",
    venue: "Three Wise Monkeys",
    date: "2024-02-02",
    tickets: "https://www.eventbrite.co.uk/e/163973001837",
    description: "",
  },
];



export default function LiveDatesSection() {
  return (
    <div className="live-dates-section" class="container mx-auto p-10 text-center mb-9">
      {/* make something that generates a list of gigs based on each of the entries in the live_dates obj */}
      <h1 className="mb-10 text-4xl font-extrabold text-gray-900 align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto">
        Live Dates
      </h1>
      {live_dates.map((live_date) => (
        <section
          className="live-dates-section__container"
          class="w-full align-centre"
        >
          <div
            className="live-dates-section__gig"
            class="mb-9 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white"
          >
            <h3>{live_date.location.toUpperCase()} - {live_date.venue.toUpperCase()} - {live_date.date.toUpperCase()} - <a class="bg-sky-500 hover:bg-sky-700" href={live_date.tickets}>TICKETS</a></h3>
            <div>{live_date.description} </div>
          </div>
        </section>
      ))}
    </div>
  );
}
