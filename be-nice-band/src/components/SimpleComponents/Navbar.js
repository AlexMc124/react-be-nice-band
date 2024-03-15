import React from "react";

import { Nav, NavLink, NavMenu, NavLogo } from "./NavbarElements";
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
      <Nav>
        <div class="flex flex-row items-stretch w-full  font-helvetica">
          <NavMenu>
            <NavLogo to="/home">
              <img
                src="logos/beniceblackhollow.png"
                class="h-10 hover:h-14"
                alt="Be Nice Logo"
              />
            </NavLogo>
            <NavLink to="/bio" activeStyle>
              About Us!
            </NavLink>
            <NavLink to="/gigs" activeStyle>
              Gigs
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact Us!
            </NavLink>
          </NavMenu>
        </div>
        <div class="flex flex-row items-stretch w-full justify-end">
          <div class="flex items-center justify-end">
            {navigation.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                class="text-2xl p-2 text-red-500"
              >
                <svg class="w-10 h-10 size-8" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
