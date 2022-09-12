/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Link from "../components/ui/Link";
import GuestGuard from "../components/guards/GuestGuard";
import useAuth from "../hooks/useAuth";
// import Button from "../components/ui/Button";
import { Button } from "@material-tailwind/react";
import axios from "../utils/axios";
import { API_URLS } from "../utils/config";
import Spinner from "../components/ui/Spinner";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";

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
            const response = await axios.post(API_URLS.login, {
                email,
                password,
            });

            const { JWT_TOKEN, user, message } = await response.data; // Destructureing data from response

            toast.success(message); // Show success login success with toast!

            login(JWT_TOKEN, user); // Calls the login method from auth context to update current user state
        } catch (error) {
            if (error.type) {
                if (error.type === "error") {
                    toast.error(error.message);
                } else {
                    setError(error.type, { type: error?.type, message: error.message });
                }
            } else {
                if (error.response) toast.error(error.response.data.message);
                else toast.error(error || error.message);
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
                    <Input
                        name="Email"
                        autoComplete="email"
                        variant="outlined"
                        label="Email address"
                        color="green"
                        size="lg"
                        error={errors.email}
                        {...register("email", {
                            required: "Please enter a valid email address!",
                        })}
                    />

                    {errors.email && <span className="px-2 text-xs text-red-600">{errors.email?.message}</span>}

                    <Input
                        name="password"
                        type="password"
                        autoComplete="email"
                        variant="outlined"
                        label="Password"
                        color="green"
                        size="lg"
                        error={errors.password}
                        {...register("password", { required: "Invalid Password!" })}
                    />
                    {errors.password && <span className="px-2 text-xs text-red-600">{errors.password?.message}</span>}
                </div>

                <div className="flex select-none items-center justify-between py-2">
                    <Checkbox label="Remember Me" color="green" {...register("remember")} />

                    <Link
                        href="#"
                        className="text-xs font-medium text-primary-main transition hover:text-primary-light hover:underline sm:text-sm"
                    >
                        Forgot your password?
                    </Link>
                </div>

                <div>
                    <Button
                        size="md"
                        variant="filled"
                        type="submit"
                        fullWidth
                        className="bg-primary-main tracking-wider text-sm capitalize"
                        disabled={isLoading}
                        color="green"
                    >
                        {isLoading ? <Spinner /> : "Sign in"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
