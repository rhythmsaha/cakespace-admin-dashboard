/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Avatar from "../ui/Avatar";
import SearchBar from "./SearchBar";
import { AnimatePresence } from "framer-motion";

function Header() {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const openSearchBar = () => {
        setShowSearchBar(true);
    };

    const closeSearchBarHandler = () => {
        setShowSearchBar(false);
    };

    return (
        <>
            <AnimatePresence>{showSearchBar && <SearchBar onClose={setShowSearchBar} />}</AnimatePresence>

            <header className="sticky top-0 px-4 h-20 flex items-center justify-between lg:px-8">
                {!showSearchBar && (
                    <div className="flex gap-2">
                        <button className="h-10 w-10 flex lg:hidden items-center justify-center hover:bg-gray-100 transition rounded-full active:bg-gray-200">
                            <AiOutlineMenu className="text-xl" />
                        </button>

                        <button
                            className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition rounded-full active:bg-gray-200"
                            onClick={openSearchBar}
                        >
                            <BiSearch className="text-xl" />
                        </button>
                    </div>
                )}

                <div className="px-2 ml-auto">
                    <button>
                        <Avatar size={9} />
                    </button>
                </div>
            </header>
        </>
    );
}
export default Header;
