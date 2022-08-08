/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function Header() {
    return (
        <header className="sticky top-0 px-4 h-20 flex items-center justify-between lg:px-8">
            <div className="flex gap-2">
                <button className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition rounded-full active:bg-gray-200">
                    <AiOutlineMenu className="text-xl" />
                </button>

                <button className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition rounded-full active:bg-gray-200">
                    <BiSearch className="text-xl" />
                </button>
            </div>

            <div className="px-2">
                <button>
                    <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </button>
            </div>
        </header>
    );
}
export default Header;
