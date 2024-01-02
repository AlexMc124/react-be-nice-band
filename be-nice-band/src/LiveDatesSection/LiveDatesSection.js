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


// GIGS: 
// 09/01 The Horn, St Albans 
// 13/01 Poco Loco, Chatham
// 02/02 Three Wise Monkeys, Colchester


export default function LiveDatesSection() {
  return (
    <div className="live-dates-section" class="container mx-auto p-10 ">
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
            <div>{live_date.location.toUpperCase()} - {live_date.venue.toUpperCase()} - {live_date.date.toUpperCase()} - <a class="bg-sky-500 hover:bg-sky-700" href={live_date.tickets}>TICKETS</a> </div>
            <div>{live_date.description} </div>
          </div>
        </section>
      ))}
    </div>
  );
}
