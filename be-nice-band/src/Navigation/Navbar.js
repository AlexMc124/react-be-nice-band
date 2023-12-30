/* This example requires Tailwind CSS v2.0+ */
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import benice_straight_Bfill_cropped from '../Images/images/benice_straight_Bfill_cropped.png'
import IconSpotify from '../Icons/Spotify'
import IconFacebookCircleLine from '../Icons/Facebook'
import IconEmail from '../Icons/Email'
import IconInstagram from '../Icons/Instagram'
import IconBxlTiktok from '../Icons/Tiktok'
import IconLogoYoutube from '../Icons/Youtube'
import IconTwitter from '../Icons/Twitter'
import IconBxlSoundcloud from '../Icons/Soundcloud'
import IconApplemusic from '../Icons/AppleMusic'

const navigation = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/6nnljk5ucY1fQue3CzHjZj?si=kkiUYTUQQ-W5NUdlvZ7miA', icon: <IconSpotify /> },
  { name: 'Instagram', href: 'https://instagram.com/be_nice_band', icon: <IconInstagram/>},
  { name: 'Tiktok', href: 'https://tiktok.com/@be.nice.band', icon: <IconBxlTiktok/> },
  { name: 'Youtube', href: 'https://youtube.com/@beniceband', icon: <IconLogoYoutube/> },
  { name: 'Facebook', href: 'https://www.facebook.com/beniceband1', icon: <IconFacebookCircleLine/> },
  { name: 'Twitter', href: 'https://x.com/BE_NICE_BAND', icon: <IconTwitter/> },
  { name: 'Soundcloud', href: 'https://soundcloud.com/be-nice-band1', icon: <IconBxlSoundcloud/> },
  { name: 'Apple Music', href: 'https://music.apple.com/gb/artist/be-n-ce/1670774338', icon: <IconApplemusic/>  },
  { name: 'Email', href: 'be.nice.band1@gmail.com', icon: <IconEmail/>},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={benice_straight_Bfill_cropped}
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={benice_straight_Bfill_cropped}
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 origin-top-right absolute right-0 mt-0 w-auto">
                  <div className="flex space-x-4 a">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
                      >
                        <image href={item.image} width="110" height="110"/>
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
