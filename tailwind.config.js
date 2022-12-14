const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    ],
    theme: {
        fontFamily: {
            sans: ["Public Sans", "sans-serif"],
        },

        colors: {
            green: {
                50: "#C8FACD",
                100: "#5BE584",
                500: "#00AB55",
                700: "#007B55",
                900: "#005249",
            },

            gray: {
                50: "#f9fafb",
                100: "#f3f4f6",
                200: "#e5e7eb",
                300: "#d1d5db",
                400: "#9ca3af",
                500: "#6b7280",
                600: "#4b5563",
                700: "#374151",
                800: "#1f2937",
                900: "#111827",
            },

            secondery: {
                lighter: "#D6E4FF",
                light: "#84A9FF",
                main: "#3366FF",
                dark: "#1939B7",
                darker: "#091A7A",
            },

            info: {
                lighter: "#D0F2FF",
                light: "#74CAFF",
                main: "#1890FF",
                dark: "#0C53B7",
                darker: "#04297A",
            },

            success: {
                lighter: "#E9FCD4",
                light: "#AAF27F",
                main: "#54D62C",
                dark: "#229A16",
                darker: "#08660D",
            },

            warning: {
                lighter: "#FFF7CD",
                light: "#FFE16A",
                main: "#FFC107",
                dark: "#B78103",
                darker: "#7A4F01",
            },

            error: {
                lighter: "#FFE7D9",
                light: "#FFA48D",
                main: "#FF4842",
                dark: "#B72136",
                darker: "#7A0C2E",
            },

            grey: {
                100: "#F9FAFB",
                200: "#F4F6F8",
                300: "#DFE3E8",
                400: "#C4CDD5",
                500: "#919EAB",
                600: "#637381",
                700: "#454F5B",
                800: "#212B36",
                900: "#161C24",
            },
        },

        extend: {
            fontFamily: {
                "public-sans": ["Public Sans", "sans-serif"],
            },

            boxShadow: {
                0: `0px 8px 24px rgba(149, 157, 165, 0.2)`,
                1: `0px 4px 12px rgba(0, 0, 0, 0.1) `,
                5: `0px 3px 8px rgba(0, 0, 0, 0.24) `,
                "button-primary": `0px 8px 16px 0px rgba(0, 171, 85, 0.24)`,
                "card-primary": `0px 12px 24px -4px #919EAB1F, 0px 0px 2px 0px #919EAB33`,
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
});
