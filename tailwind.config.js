/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./utils/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "Sans Serif"],
                title: ["Inter", "Sans Serif"]
            },
            fontSize: {
                body: [
                    "1rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                h1: [
                    "3.5rem",
                    {
                        lineHeight: "3.75rem"
                    }
                ],
                h2: [
                    "2.25rem",
                    {
                        lineHeight: "2.625rem"
                    }
                ],
                h3: [
                    "1.875rem",
                    {
                        lineHeight: "2.25rem"
                    }
                ],
                h4: [
                    "1.5rem",
                    {
                        lineHeight: "2rem"
                    }
                ],
                h5: [
                    "1.25rem",
                    {
                        lineHeight: "1.75rem"
                    }
                ],
                h6: [
                    "1.125rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                mini: [
                    "0.75rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ]
            },
            colors: {
                black: {
                    DEFAULT: "#000000",
                    50: "#E6E6E6",
                    100: "#CCCCCC",
                    200: "#999999",
                    300: "#666666",
                    400: "#333333",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000"
                },
                white: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FAFAFA",
                    400: "#FAFAFA",
                    500: "#F7F7F7",
                    600: "#C7C7C7",
                    700: "#949494",
                    800: "#636363",
                    900: "#303030"
                },
                primary: {
                    50: "#FCFCFC",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FCFCFC",
                    400: "#FAFAFA",
                    500: "#FAFAFA",
                    600: "#E3E3E3",
                    700: "#C7C7C7",
                    800: "#A6A6A6",
                    900: "#787878",
                    950: "#595959"
                },
                secondary: {
                    50: "#F8F7F4",   // lighter than before
                    100: "#F2EDE6",  // shifted from 50
                    200: "#E8E3DC",  // shifted from 100
                    300: "#D8D2C4",  // shifted from 200
                    400: "#C8C1AC",  // new color, slightly lighter than 500
                    500: "#B8B094",  // your chosen color, shifted from 400
                    600: "#A69D74",  // shifted from 500
                    700: "#8F8562",  // shifted from 600
                    800: "#786D50",  // shifted from 700
                    900: "#62553E",  // shifted from 800
                    950: "#4C3D2C"   // shifted from 900
                },                              
                badge: "#F1F5F9",
                badgeText: "#475569"
            }
        }
    },
    plugins: []
};
