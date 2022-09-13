/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Link from "../components/ui/Link";
import GuestGuard from "../components/guards/GuestGuard";
import useAuth from "../hooks/useAuth";
import { API_URLS } from "../utils/config";
import axios from "../utils/axios";
import Spinner from "../components/ui/Spinner";
import { Input, Checkbox, Typography, Button } from "@material-tailwind/react";
import { useLocalStorage } from "react-use";

Login.getLayout = function getLayout(page) {
    return <GuestGuard>{page}</GuestGuard>;
};

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);

    const [credentials, setCredentials, removeCredentials] = useLocalStorage("credentials");
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        setValue,
    } = useForm({});

    useEffect(() => {
        if (credentials) {
            const { email, password } = JSON.parse(credentials);
            setValue("email", email, { shouldValidate: true });
            setValue("password", password, { shouldValidate: true });
            setValue("remember", true);
        }
    }, [setValue, credentials]);

    // Login Handler
    const submitHandler = async ({ email, password, remember }) => {
        if (isLoading) return;
        toast.dismiss();

        // Set Credentials to lcoalstorage if remember me is checked!
        if (remember) {
            setCredentials(JSON.stringify({ email, password }));
        } else {
            removeCredentials();
        }

        setIsLoading(true);

        try {
            const response = await axios.post(API_URLS.login, { email, password });

            console.log(response);

            // const { JWT_TOKEN, user, message } = await response.data; // Destructureing data from response

            // toast.success(message); // Show success login success with toast!

            // login(JWT_TOKEN, user); // Calls the login method from auth context to update current user state
        } catch (error) {
            // if (error.type) {
            //     if (error.type === "error") {
            //         toast.error(error.message);
            //     } else {
            //         setError(error.type, { type: error?.type, message: error.message });
            //     }
            // } else {
            //     if (error.response) toast.error(error.response.data.message);
            //     else toast.error(error || error.message);
            // }

            console.log(error);
        }

        setIsLoading(false); // Set loading state to false
    };

    return (
        <div className="mx-auto w-11/12 max-w-md px-2 pt-[12vh]">
            <div>
                <img className="mx-auto h-32 object-contain" src="/logo.png" alt="Cakespace" />
                <Typography variant="h5">Sign in to your account</Typography>
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
                        className="bg-primary-main tracking-wider text-sm capitalize flex items-center justify-center"
                        color="green"
                        disabled={isLoading}
                    >
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    );
}
