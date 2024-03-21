import React from "react";

import { NavLink as Link } from "react-router-dom";
import IconSpotify from "../Icons/Spotify";
import IconFacebookCircleLine from "../Icons/Facebook";
import IconEmail from "../Icons/Email";
import IconInstagram from "../Icons/Instagram";
import IconBxlTiktok from "../Icons/Tiktok";
import IconLogoYoutube from "../Icons/Youtube";
import IconTwitter from "../Icons/Twitter";
import IconBxlSoundcloud from "../Icons/Soundcloud";
import IconApplemusic from "../Icons/AppleMusic";

const navigation = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6nnljk5ucY1fQue3CzHjZj?si=kkiUYTUQQ-W5NUdlvZ7miA",
    icon: <IconSpotify />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/be_nice_band",
    icon: <IconInstagram />,
  },
  {
    name: "Tiktok",
    href: "https://tiktok.com/@be.nice.band",
    icon: <IconBxlTiktok />,
  },
  {
    name: "Youtube",
    href: "https://youtube.com/@beniceband",
    icon: <IconLogoYoutube />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/beniceband1",
    icon: <IconFacebookCircleLine />,
  },
  {
    name: "Twitter",
    href: "https://x.com/BE_NICE_BAND",
    icon: <IconTwitter />,
  },
  {
    name: "Soundcloud",
    href: "https://soundcloud.com/be-nice-band1",
    icon: <IconBxlSoundcloud />,
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/gb/artist/be-n-ce/1670774338",
    icon: <IconApplemusic />,
  },
  { name: "Email", href: "be.nice.band1@gmail.com", icon: <IconEmail /> },
];

const Navbar = () => {
  return (
    <>
      <div class="h-40">
        <div class="grid grid-rows-5 grid-cols-2 grid-flow-col gap-1 h-40 justify-items-center">
          <div class="row-span-3 w-full">
            <Link to="">
              <img
                src="logos/beniceblackhollow.png"
                class="h-24"
                alt="Be Nice Logo"
              />
            </Link>
            </div>
            <div class="row-span-2 flex space-x-4">
              {navigation.map((item) => (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    class="text-2xl md:text-1"
                  >
                    <svg class="pt-2 md:w-10 h-10 sm:w-5 h-5" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </a>
                ))}
            </div>
          </div>
          
          <div class="row-2 col-1">
          <Link to="/bio" activeStyle>
              About Us!
            </Link>
            <Link to="/gigs" activeStyle>
              Gigs
            </Link>
            <Link to="/contact" activeStyle>
              Contact Us!
            </Link>
            
          </div>
        </div>
    </>
  );
};

export default Navbar;
