/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import Rolyn from "../public/rolyn.png";
import Image from "next/image";
import Link from "next/link";
const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
  },
  {
    name: "Pricing and Services",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/priceandservices",
  },
  {
    name: "Portfolio",
    description: "Your customers' data will be safe and secure.",
    href: "/portfolio",
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

export default function Navbar() {
  return (
    <Popover className="relative z-40">
      <div className="bg-[#0401012b] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start items-center  lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="whitespace-nowrap text-base font-medium">
                  <Image alt="Rolyn" src={Rolyn} quality={100} />
                </a>
              </Link>
              <span className="whitespace-nowrap text-base font-medium align-middle text-white hover:text-gray">
                O L Y N
              </span>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-7">
              <Link href="/">
                <a className="whitespace-nowrap text-base font-medium text-white hover:text-gray ">
                  Home
                </a>
              </Link>
              <Link href="/priceandservices">
                <a className="whitespace-nowrap text-base font-medium text-white hover:text-gray">
                  Pricing and Services
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="whitespace-nowrap text-base font-medium text-white hover:text-white">
                  Portfolio
                </a>
              </Link>
              <Link href="https://kem10.typeform.com/to/mkk4K0">
                <a
                  href="https://kem10.typeform.com/to/mkk4K0"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-full shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700"
                >
                  Get a Qoute
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 bg-[#040101]">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between ">
                <div className="text-white">
                  <Image
                    alt="Rolyn"
                    src={Rolyn}
                    className="h-8 w-auto text-white"
                  />{" "}
                  O L Y N
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-white"
                    >
                      {/* <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      <span className="ml-3 text-base font-medium text-white-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="https://kem10.typeform.com/to/mkk4K0">
                  <a
                    href="https://kem10.typeform.com/to/mkk4K0"
                    className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-full shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700"
                  >
                    Get a Qoute
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
