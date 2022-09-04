/* eslint-disable @next/next/no-img-element */
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Link from "../components/ui/Link";
import GuestGuard from "../components/guards/GuestGuard";
import useAuth from "../hooks/useAuth";
import Button from "../components/ui/Button";
import axios from "../utils/axios";

Login.getLayout = function getLayout(page) {
    return <GuestGuard>{page}</GuestGuard>;
};

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        setValue,
    } = useForm({});

    useEffect(() => {
        //Retrive credentials from localstorage if saved
        const credentials = localStorage.getItem("credentials");

        if (credentials) {
            const decoded = atob(credentials); // Decode credentials from base64 format
            const { email, password } = JSON.parse(decoded);
            setValue("email", email, { shouldValidate: true });
            setValue("password", password, { shouldValidate: true });
            setValue("remember", true);
        }
    }, [setValue]);

    // Login Handler
    const submitHandler = async ({ email, password, remember }) => {
        if (isLoading) return; // does nothing if isloading is true
        toast.dismiss(); // dismiss any other toasts

        // Save credentials if remember me is checked else rmeove from localstorage
        if (remember) {
            const credentials = { email, password };
            const encoded = btoa(JSON.stringify(credentials)); // Encode credentials to base64 format
            localStorage.setItem("credentials", encoded);
        } else {
            localStorage.removeItem("credentials");
        }

        setIsLoading(true); // set the loading state to true

        try {
            // Post login request to server
            const response = await axios.post("/auth/seller/login", {
                email,
                password,
            });

            const { JWT_TOKEN, user, message } = await response.data; // Destructureing data from response

            toast.success(message); // Show success login success with toast!

            login(JWT_TOKEN, user); // Calls the login method from auth context to update current user state
        } catch (error) {
            if (error.type === "error") {
                toast.error(error.message);
            } else {
                setError(error.type, { type: error?.type, message: error.message });
                setError(error.type, { type: error?.type, message: error.message });
            }
        }

        setIsLoading(false); // Set loading state to false
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
                            className="h-4 w-4 rounded border-gray-300 text-primary-main focus:ring-transparent outline-none focus:outline-none cursor-pointer transition-all duration-300  ease-in-out"
                            {...register("remember")}
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
                    <Button type="submit" variant="primary" size="lg" width="100%" disabled={isLoading}>
                        {isLoading ? <BeatLoader color="white" size={10} className="py-1.5" /> : "Sign in"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
