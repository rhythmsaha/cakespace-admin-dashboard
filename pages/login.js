/* eslint-disable @next/next/no-img-element */
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import Link from "../components/ui/Link";
import GuestGuard from "../components/layouts/GuestGuard";

Login.getLayout = function getLayout(page) {
    return <GuestGuard>{page}</GuestGuard>;
};

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-md mx-auto pt-[12vh] w-11/12 px-2">
            <div>
                <img className="mx-auto h-32 object-contain" src="/logo.png" alt="Cakespace" />
                <h2 className="text-center text-xl lg:text-2xl font-extrabold text-gray-700">
                    Sign in to your account
                </h2>
            </div>

            <form className="mt-8" onSubmit={submitHandler}>
                <div className="space-y-4">
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />

                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>

                <div className="flex items-center justify-between py-4 select-none">
                    <label
                        htmlFor="remember"
                        className="gap-1.5 text-sm text-gray-900 flex items-center justify-center cursor-pointer"
                    >
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                        />
                        Remember me
                    </label>

                    <Link
                        href="#"
                        className="font-medium text-emerald-600 hover:text-emerald-500 text-xs sm:text-sm hover:underline"
                    >
                        Forgot your password?
                    </Link>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center items-center h-10 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                        {isLoading ? <BeatLoader color="white" size={8} /> : "Sign in"}
                    </button>
                </div>
            </form>
        </div>
    );
}
