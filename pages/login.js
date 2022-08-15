/* eslint-disable @next/next/no-img-element */
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import Link from "../components/ui/Link";
import GuestGuard from "../components/guards/GuestGuard";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

Login.getLayout = function getLayout(page) {
    return <GuestGuard>{page}</GuestGuard>;
};

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const submitHandler = ({ email, password }) => {
        login(email, password);
    };

    return (
        <div className="mx-auto w-11/12 max-w-md px-2 pt-[12vh]">
            <div>
                <img className="mx-auto h-32 object-contain" src="/logo.png" alt="Cakespace" />
                <h2 className="text-center text-xl font-extrabold text-gray-700 lg:text-2xl">
                    Sign in to your account
                </h2>
            </div>

            <form className="mt-8" onSubmit={handleSubmit(submitHandler)}>
                <div className="space-y-4">
                    <input
                        name="Email"
                        type="text"
                        autoComplete="email"
                        className={`relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:outline-none ${
                            errors.email
                                ? "border-error-main focus:border-error-main focus:ring-error-main"
                                : "focus:border-primary-main focus:ring-primary-main"
                        } focus:z-10 sm:text-sm`}
                        placeholder="Email address"
                        {...register("email", {
                            required: "Please enter a valid email address!",
                        })}
                    />
                    {errors.email && <span className="px-2 text-xs text-red-600">{errors.email?.message}</span>}

                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        className={`relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:outline-none ${
                            errors.password
                                ? "border-error-main focus:border-error-main focus:ring-error-main"
                                : "focus:border-primary-main focus:ring-primary-main"
                        } focus:z-10 sm:text-sm`}
                        {...register("password", { required: "Invalid Password!" })}
                    />
                    {errors.password && <span className="px-2 text-xs text-red-600">{errors.password?.message}</span>}
                </div>

                <div className="flex select-none items-center justify-between py-4">
                    <label
                        htmlFor="remember"
                        className="flex cursor-pointer items-center justify-center gap-1.5 text-sm text-gray-900"
                    >
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-main focus:ring-primary-main"
                        />
                        Remember me
                    </label>

                    <Link
                        href="#"
                        className="text-xs sm:text-sm font-medium text-primary-main hover:text-primary-light hover:underline transition"
                    >
                        Forgot your password?
                    </Link>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex h-10 w-full items-center justify-center rounded-md  bg-primary-main active:bg-primary-dark py-2 px-4 text-sm font-medium text-white hover:shadow-button-primary transition duration-200"
                    >
                        {isLoading ? <BeatLoader color="white" size={8} /> : "Sign in"}
                    </button>
                </div>
            </form>
        </div>
    );
}
