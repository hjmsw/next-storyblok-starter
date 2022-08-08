import { SocialIcon } from "react-social-icons";
import { useDarkMode } from "@hjmsw/useful-hooks";
import Link from "next/link";
import parseSlug from "../lib/util/parseSlug";

const Footer = ({ content }) => {
    const { site_title, nav_items, social_link_items } = content;
    const isDarkMode = useDarkMode();

    return (
        <footer className="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
            <div className="flex flex-col">
                <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                    <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                        {nav_items.map((item, index) => (
                            <Link href={parseSlug(item.link.cached_url)} key={`footer_nav_item_${index}`}>
                                <a aria-current="page" className="hover:text-gray-700 dark:hover:text-white">
                                    {item.label}
                                </a>
                            </Link>
                        ))}
                    </nav>
                    <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
                    </div>
                    <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                        {social_link_items.map((item, index) => (
                            <SocialIcon bgColor="none" url={item.link.url} fgColor={isDarkMode ? '#e5e7eb' : '#000'} key={`footer_social_icon_nav_item_${index}`} />
                        ))}
                    </div>
                    <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                    </div>
                    <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                        <span className="">
                            © 2022
                        </span>
                        <span className="mt-7 md:mt-1">
                            {site_title}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
