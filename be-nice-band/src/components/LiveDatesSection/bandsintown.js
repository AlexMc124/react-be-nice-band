import React from "react";

const BandsInTown = () => {
  return (
    <div class="h-screen bg-center bg-black bg-cover">
      <div class="container mx-auto">
        <div class="flex flex-row items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white text-center align-centre md:text-5xl lg:text-6xl dark:text-white mx-auto">
                Live Dates
              </h1>
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
