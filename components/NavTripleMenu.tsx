import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { SocialIcon } from 'react-social-icons';
import { useDarkMode } from "@hjmsw/useful-hooks";
import Link from "next/link";
import parseSlug from "../lib/util/parseSlug";

function NavTripleMenu({ content }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { site_title, nav_items, social_link_items } = content;
  const isDarkMode = useDarkMode();

  return (
    <div className="flex items-center h-20 px-6 justify-between shadow-sm bg-white dark:bg-gray-800 dark:text-gray-200 relative z-50">
      <Link href="/">
        <a className="flex-1 no-underline block h-8 text-xl md:text-3xl">
          {site_title}
        </a>
      </Link>
      <div className="flex-none hidden md:flex md:justify-center md:h-full">
        {nav_items.map((item, index) => (
          <Link href={parseSlug(item.link.cached_url)} key={`nav_item_${index}`}>
            <a
              className="block h-full flex items-center mx-4 px-2 border-b-2 border-transparent
              hover:underline hover:underline-offset-8 text-xl"
            >
              {item.label}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex-1 items-center justify-end hidden md:flex">
        {social_link_items.map((item, index) => (
          <SocialIcon bgColor="none" fgColor={isDarkMode ? '#e5e7eb' : '#000'} url={item.link.url} key={`social_icon_nav_item_${index}`} />
        ))}
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black cursor-pointer md:hidden h-16"
      />
      {mobileOpen && (
        <div className="bg-white absolute top-full left-0 flex flex-col w-full py-8 shadow-sm lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            {nav_items.map((item, index) => (
              <Link href={parseSlug(item.link.cached_url)} key={`nav_item_mobile_${index}`}>
                <a className="no-underline px-2 my-2 font-medium hover:text-blue-400">
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="cursor-pointer my-2">
              {social_link_items.map((item, index) => (
                <SocialIcon bgColor="none" fgColor={isDarkMode ? '#e5e7eb' : '#000'} url={item.link.url} key={`social_icon_nav_item_mobile_${index}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavTripleMenu