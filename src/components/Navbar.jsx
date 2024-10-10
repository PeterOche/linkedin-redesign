import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import LinkedInLogo from "../assets/logo.svg";
import More from "../assets/more-horizontal.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppState";

export default function Navbar() {
  const { state } = useContext(AppContext);
  const user = state.users[0];

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className=" max-w-full sm:px-8">
            <div className="relative flex h-16 space-x-4 items-center">
              {/* Mobile Menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="sm:flex items-center hidden h-full border-r-[1px] border-[#F4F4F4] pr-4">
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  className="h-[46px] w-[46px] mx-auto"
                />
              </div>

              {/* Middle navigation links with icons */}
              <div className="hidden lg:flex   justify-start items-center  space-x-2  h-full border-r-[1px] border-[#F4F4F4] ">
                <NavLink
                  to="feed"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center font-medium px-6 text-[#0275B1] text-[12px] py-2 border-b-[2px] border-[#0275B1]"
                      : "flex flex-col items-center font-medium  px-6 text-[#181818] text-[12px]"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  FEED
                </NavLink>
                <NavLink
                  to="network"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center  px-6 font-medium text-[#0275B1] text-[12px] py-2 border-b-[2px] border-[#0275B1]"
                      : "flex flex-col items-center  px-6 font-medium text-[#181818] text-[12px]"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  NETWORK
                </NavLink>
                <NavLink
                  to="jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center px-6 font-medium text-[#0275B1] text-[12px] py-2 border-b-[2px] border-[#0275B1]"
                      : "flex flex-col items-center px-6 font-medium text-[#181818] text-[12px]"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  JOBS
                </NavLink>
                <NavLink
                  to="chat"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center px-6 font-medium text-[#0275B1] text-[12px] py-2 border-b-[2px] border-[#0275B1]"
                      : "flex flex-col items-center px-6 font-medium text-[#181818] text-[12px]"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  CHAT
                </NavLink>
                <NavLink
                  to="notices"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center font-medium px-6 text-[#0275B1] text-[12px] py-2 border-b-[2px] border-[#0275B1]"
                      : "flex flex-col items-center font-medium px-6 text-[#181818] text-[12px]"
                  }
                >
                  <BellIcon className="h-6 w-6" />
                  NOTICES
                </NavLink>
              </div>

              {/* Search Bar */}
              <div className="mx-auto md:mx-0 flex flex-1 justify-center md:justify-start items-center sm:space-x-4 h-full border-r-[1px] border-[#F4F4F4] px-6 ">
                <div className="relative">
                  <input
                    type="search"
                    className="block w-full pl-10 pr-3 py-2 leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-[12px]"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-[#0275B1]" />
                  </div>
                </div>
              </div>

              {/* Profile and other options */}
              <div className="absolute inset-y-0 right-0 hidden lg:flex lg:flex-1 items-center space-x-4 pr-8 sm:static sm:inset-auto sm:ml-6  h-full border-r-[1px] border-[#F4F4F4]">
                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <div>
                    <MenuButton className="flex rounded-full bg-white text-[12px] focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-[42px] w-[42px] rounded-full"
                        src={user.profileImage}
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-[12px] ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Profile
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-[12px] ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-[12px] ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <div className="hidden lg:flex flex-col whitespace-nowrap">
                  <div className="flex space-x-2">
                    <p className="text-[12px] ">{user.name}</p>
                    <span className="text-[12px]">You</span>
                  </div>
                  <div className="flex space-x-2">
                    <p className="text-[12px]">367 views today</p>
                    <p className="text-[12px] text-[#02B033]">+32</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block h-full border-r-[1px] border-[#F4F4F4] py-2 px-4">
                <div className="flex flex-col items-center ">
                  <span>
                    <img src={More} alt="" />
                  </span>
                  <h2 className="text-[12px]">OTHER</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, toggle based on menu state */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <img src={LinkedInLogo} alt="LinkedIn" />
              <NavLink
                to="feed"
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium text-[#0275B1]"
                    : "block px-3 py-2 rounded-md text-base font-medium text-[#181818]"
                }
              >
                FEED
              </NavLink>
              <NavLink
                to="network"
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium text-[#0275B1]"
                    : "block px-3 py-2 rounded-md text-base font-medium text-[#181818]"
                }
              >
                NETWORK
              </NavLink>
              <NavLink
                to="jobs"
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium text-[#0275B1]"
                    : "block px-3 py-2 rounded-md text-base font-medium text-[#181818]"
                }
              >
                JOBS
              </NavLink>
              <NavLink
                to="chat"
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium text-[#0275B1]"
                    : "block px-3 py-2 rounded-md text-base font-medium text-[#181818]"
                }
              >
                CHAT
              </NavLink>
              <NavLink
                to="notices"
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium text-[#0275B1]"
                    : "block px-3 py-2 rounded-md text-base font-medium text-[#181818]"
                }
              >
                NOTICES
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
