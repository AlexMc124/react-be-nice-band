import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import IconSpotify from "../Icons/Spotify";
import IconFacebookCircleLine from "../Icons/Facebook";
import IconEmail from "../Icons/Email";
import IconInstagram from "../Icons/Instagram";
import IconBxlTiktok from "../Icons/Tiktok";
import IconLogoYoutube from "../Icons/Youtube";
import IconTwitter from "../Icons/Twitter";
import IconBxlSoundcloud from "../Icons/Soundcloud";
import IconApplemusic from "../Icons/AppleMusic";
import {
  Navbar,
  MobileNav,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

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

export function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navigation.map(({ name, href, icon }) => (
    <a href={href} key={name} class="fill-gray-500 hover:fill-white">
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
          {name}
          <svg class="size-8 hover:size-10" viewBox="0 0 24 24">
            {icon}
          </svg>
          </ListItem>
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <MenuItem
            className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full"
          >
            Stay Connected!
          </MenuItem>
        </MenuHandler>
        <MenuList className="hidden overflow-visible flex-col bg-black lg:grid">
          <ul className="col-span-4 w-full flex-wrap">{renderItems}</ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

export function NavList() {
  return (
    <ul className="mt-2 mb-4 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar color="gray" class="display-block" className="max-w-full">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="https://benice.band/"
          class="flex items-center"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          <img
            src="Titles/be_nice_white_logo.png"
            class="h-10 hover:h-14"
            alt="Be Nice Logo"
          />
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
      </div>
    </Navbar>
  );
}
