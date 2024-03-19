import React from "react";

const BandsInTown = () => {
  return (
    <div class="h-screen bg-center bg-black bg-cover">
      <div
        className="live-dates-section"
        class="container mx-auto p-10 text-center"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-row items-center justify-center">
            <img
              class="size-1/2"
              src="Titles/3dgifmaker96154.gif"
              alt="flip logo"
            />
            <div class="flex flex-col">
              <h1 className="text-4xl font-extrabold text-white align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto">
                Live Dates
              </h1>
            </div>
            <img
              class="size-1/2"
              src="Titles/3dgifmaker96154.gif"
              alt="flip logo"
            />
          </div>
        </div>
      </div>
      <div class="bit-container h-full w-auto">
        <iframe
          class="responsive-iframe"
          src="https://bnds.us/bmbyt0"
          width="100%"
          height="100%"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="bandsintown-iframe"
        ></iframe>

        
      </div>
    </div>
  );
};

export default BandsInTown;
