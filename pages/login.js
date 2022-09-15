/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Link from "../components/ui/Link";
import GuestGuard from "../components/guards/GuestGuard";
import useAuth from "../hooks/useAuth";
import { API_URLS } from "../utils/config";
import axios from "../utils/axios";
import { Input, Checkbox, Typography, Button } from "@material-tailwind/react";
import { useLocalStorage } from "react-use";
import Spinner from "../components/ui/Spinner";

Login.getLayout = function getLayout(page) {
    return <GuestGuard>{page}</GuestGuard>;
};

export default function Login() {
    const [credentials, setCredentials, removeCredentials] = useLocalStorage("credentials");
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
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
        if (isSubmitting) return;
        toast.dismiss();

        // Set Credentials to lcoalstorage if remember me is checked!
        if (remember) setCredentials(JSON.stringify({ email, password }));
        else removeCredentials();

        try {
            const response = await axios.post(API_URLS.login, { email, password });

            const { JWT_TOKEN, user, message } = await response.data;

            toast.success(message);

            // Call the login method from auth context to update current user state
            login(JWT_TOKEN, user);
        } catch (error) {
            if (error?.fields && error.fields.length > 0) {
                error.fields.forEach((field) => {
                    setError(field.path, { type: field.type, message: field.message });
                });
            } else {
                toast.error(error?.message || error || "Something went wrong!");
            }
        }
    };

    return (
        <div className="mx-auto w-11/12 max-w-md  pt-[10vh]">
            <div>
                <img className="mx-auto h-32 object-contain " src="/logo.png" alt="Cakespace" />
                <Typography variant="h4" className="font-extrabold px-1 text-xl sm:text-2xl text-center text-gray-700 ">
                    Sign in to your account
                </Typography>
            </div>

            <form className="mt-8" onSubmit={handleSubmit(submitHandler)}>
                <div className="space-y-4 px-2">
                    <Input
                        name="Email"
                        type="text"
                        variant="outlined"
                        label="Email address"
                        color="green"
                        size="lg"
                        error={!!errors.email}
                        {...register("email", {
                            required: "Email is required!",
                        })}
                    />

                    {!!errors.email && <span className="px-2 text-xs text-red-600">{errors.email?.message}</span>}

                    <Input
                        name="password"
                        type="password"
                        variant="outlined"
                        label="Password"
                        color="green"
                        size="lg"
                        error={!!errors.password}
                        {...register("password", { required: "Password is required!" })}
                    />
                    {!!errors.password && <span className="px-2 text-xs text-red-600">{errors.password?.message}</span>}
                </div>

                <div className="flex justify-between items-center py-2 select-none">
                    <Checkbox label="Remember Me" color="green" {...register("remember")} />

                    <Link href="" className="text-xs font-medium text-green-500 transition  hover:underline sm:text-sm">
                        Forgot your password?
                    </Link>
                </div>

                <div className="px-2">
                    <Button
                        size="md"
                        variant="filled"
                        type="submit"
                        fullWidth
                        className="flex items-center justify-center tracking-wider text-sm capitalize "
                        color="green"
                        disabled={isSubmitting}
                    >
                        {isSubmitting && <Spinner />}
                        {!isSubmitting && "Sign in"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
