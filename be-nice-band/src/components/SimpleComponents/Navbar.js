import React from "react";

import IconSpotify from "../Icons/Spotify";
import IconFacebookCircleLine from "../Icons/Facebook";
import IconEmail from "../Icons/Email";
import IconInstagram from "../Icons/Instagram";
import IconBxlTiktok from "../Icons/Tiktok";
import IconLogoYoutube from "../Icons/Youtube";
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
      <div class="bg-gray-900">
        <div class="flex flex-row items-center justify-center">
          <a href="/">
            <img
              src="logos/benicelogowhitehollow.png"
              class="max-w-80 max-h-40 justify-center"
              alt="Be Nice Logo"
            />
          </a>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="row-span-2 flex space-x-4">
            {navigation.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                class="text-2xl md:text-1"
              >
                <svg class="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div class="flex flex-row items-center justify-center p-2">
          <div class="font-sans p-2 text-white">
            <a href="/" class="text-base">
              Home!
            </a>
          </div>
          <div class="font-sans p-2 text-white">
            <a href="/bio" class="text-base">
              About Us!
            </a>
          </div>
          <div class="font-sans p-2 text-white">
            <a href="/gigs" activeStyle>
              Gigs!
            </a>
          </div>
          <div class="font-sans p-2 text-white">
            <a href="/contact" activeStyle>
              Contact Us!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
