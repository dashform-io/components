import React from "react";
import Input from "../Input/Input";
import Key from "../Key/Key";
import { Header } from "../Text/Text";
import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
import Logo from "../../assets/images/logo.svg";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <div
      className={`sticky top-0 flex h-20 w-full flex-row justify-between items-center px-4 bg-white/50 backdrop-blur-lg z-50 ${className}`}
    >
      <div className="flex flex-row items-start">
        <img alt="DashForm Logo" src={Logo} className="w-[200px]" />
        <div className="px-2 py-0.5 rounded-md ml-2 bg-gray-200 font-medium text-xs mt-1">
          Beta
        </div>
      </div>
      <div className="flex flex-row items-center gap-6">
        {/* <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
            ${open ? "" : "text-opacity-90"}
            group inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold text-slate-600 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span>Features</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${
                    open ? "rotate-180" : "text-opacity-70"
                  } ml-2 h-3 w-3 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover> */}
        <button className="text-lg font-semibold text-slate-600 text-opacity-90 hover:text-opacity-100">
          Docs
        </button>
        <button className="text-lg font-semibold text-slate-600 text-opacity-90 hover:text-opacity-100">
          Showcase
        </button>
      </div>
      <div className="mr-4 flex flex-row items-center gap-4">
        <a href="/login">
          <Button variant="ghost">Sign in</Button>
        </a>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;
