import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Portal from "../components/hoc/Portal";
import AuthProvider from "../context/AuthContext";
import store from "../store";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>CakeSpace</title>
            </Head>

            <AuthProvider>
                <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
            </AuthProvider>

            <Portal>
                <Toaster position="top-center" reverseOrder={false} />
            </Portal>
        </>
    );
}
