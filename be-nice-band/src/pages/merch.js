import React from "react";
import { useEffect } from "react";
import getStripe from "../lib/getStripe.js";

export default function Merch() {
  console.log(process.env.REACT_APP_NEXT_PUBLIC_STRIPE_PRICE_ID);
  console.log(process.env.REACT_APP_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  useEffect(() => {
    document.title = "Be Nice! - Merch";
  }, []);
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.REACT_APP_NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: `www.benice.band/`,
      cancelUrl: `www.benice.band/merch`,
    });
    console.warn(error.message);
  }

  return (
    <>
      <div class="bg-gradient-to-r from-gray-900 to-gray-700 pt-10 h-screen">
        <div class="container h-full p-10 bg-grey text-black rounded text-left font-sans flex flex-col items-left justify-left text-m sm:text-center dark:text-gray-400">
          <div class="container p-5 mb-10 bg-gray-900 rounded">
            <div class=" text-white text-4xl">BEDTIME T-Shirt</div>
            <div class="row-span-2 flex items-center">
              <div class="text-white w-1/2">
                <img
                  src="images/BEDTIME_WHITE.png"
                  class="rounded p-5"
                  alt="Bedtime Shirt"
                />
              </div>
              <div class="text-white p-5 w-1/2">
                One of the highest quality T-shirts on the market, impress all your 
                friends with a cool piece of fashion that lets them know you support 
                your fave stupid punk rockers!
                <br />
                <br />
                Available in sizes S, M, L, XL, XXL with a unisex fit. 100% cotton.
                The design is printed on the front of the shirt, designed by our friend and 
                artist Amy, who is a genius. Get yours now!
              </div>
            </div>
          <button
            class="bg-blue-500 hover:scale-110 transition-transform duration-500 ease-in-out bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleCheckout}
          >
            Buy Now!
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
