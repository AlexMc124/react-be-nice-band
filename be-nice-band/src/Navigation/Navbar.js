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

export default function Navbar() {
  return (
    <nav class="bg-gray-800 shadow fixed top-0 left-0 right-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://benice.band/"
          class="flex items-center"
        >
          <img
            src="Titles/benice_straight_Bfill_cropped.png"
            class="h-8"
            alt="Be Nice Logo"
          />
        </a>
        <ul class="flex flex-wrap items-center hover:black">
          {navigation.map((item) => (
            <li class="group/item hover:bg-slate-100 ...">
            <a
              key={item.name}
              href={item.href}
              className="p-10"
            >
              {item.icon}
            </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
