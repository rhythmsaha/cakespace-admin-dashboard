import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Portal from "../components/hoc/Portal";
import AuthProvider from "../context/AuthContext";
import store from "../store";
import "../styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

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
};

export default MyApp;
