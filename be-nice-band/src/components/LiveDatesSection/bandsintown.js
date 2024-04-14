import React from "react";

const BandsInTown = () => {
  return (
    <div class="h-screen bg-center bg-black bg-cover">
        <div class="flex flex-row items-center justify-center">
          <h1 className="text-4xl inline-block font-extrabold text-white text-center align-centre md:text-5xl lg:text-6xl dark:text-white p-5">
            Live Dates
          </h1>
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
