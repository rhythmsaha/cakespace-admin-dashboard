import Head from "next/head";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../context/AuthContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>CakeSpace</title>
            </Head>

            <Toaster position="top-center" reverseOrder={false} />
            <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        </>
    );
}
