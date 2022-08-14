/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    lighter: "#C8FACD",
                    light: "#5BE584",
                    main: "#00AB55",
                    dark: "#007B55",
                    darker: "#005249",
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

            fontFamily: {
                "public-sans": ["Public Sans", "sans-serif"],
            },

            boxShadow: {
                0: `0px 8px 24px rgba(149, 157, 165, 0.2)`,
                1: `0px 4px 12px rgba(0, 0, 0, 0.1) `,
                5: `0px 3px 8px rgba(0, 0, 0, 0.24) `,
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
