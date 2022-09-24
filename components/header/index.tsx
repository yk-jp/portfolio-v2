import Link from "next/link";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navBtnRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const triggerElId = "triggerEl";
  const targetElId = "targetEl";
  const themeToggleId = "themeToggleEl";

  const sections = [
    {
      link: "#aboutme",
      title: "About me",
    },
    {
      link: "#projects",
      title: "Projects",
    },
    {
      link: "#contact",
      title: "Contact",
    },
  ];

  const popupMenuItem = (): void => {
    const el = document.getElementById(targetElId)!;
    el.classList.contains("block") ? hideElement(el) : displayElement(el);
  };

  const displayElement = (el: HTMLElement): void => {
    el.classList.remove("hidden");
    el.classList.add("block");
  };

  const hideElement = (el: HTMLElement): void => {
    el.classList.remove("block");
    el.classList.add("hidden");
  };

  useEffect(() => {
    const navBarHandler = (e: MouseEvent) => {
      if (navBtnRef.current?.contains(e.target as Node)) return;

      if (!navMenuRef.current?.contains(e.target as Node)) {
        const el = document.getElementById(targetElId)!;
        hideElement(el);
      }
    };

    document.addEventListener("mousedown", navBarHandler);

    return () => {
      document.removeEventListener("mousedown", navBarHandler);
    };
  }, []);

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 flex">
        <div className="container flex flex-wrap justify-end items-center mx-auto">
          <div className="flex justify-end md:order-2">
            <button
              id={triggerElId}
              data-collapse-toggle="navbar-sticky"
              ref={navBtnRef}
              type="button"
              className="collapse inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 hover:text-blue-700 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={popupMenuItem}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="flex item-center px-2 sticky">
              <button
                id={themeToggleId}
                type="button"
                className="text-black-500 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 hover:text-blue-700"
              >
                {/* <FontAwesomeIcon icon={faMoon} /> */}
                <FontAwesomeIcon icon={faSun} size="lg" />
              </button>
            </div>
          </div>

          <div
            className="hidden items-center w-full md:flex md:w-auto"
            id={targetElId}
            ref={navMenuRef}
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {sections.map((sec, idx) => {
                return (
                  <Link href={sec.link} key={`${idx}-${sec.title}`}>
                    <li className="block py-2 pr-4 pl-3 rounded cursor-pointer hover:text-blue-700 md:p-0 md:dark:hover:text-white">
                      {sec.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
