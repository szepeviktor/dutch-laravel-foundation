module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    corePlugins: {
        container: false,
    },
    important: false,
    theme: {
        screens: {
            xs: "321px",
            sm: "640px",
            md: "768px",
            base: "835px",
            lg: "1024px",
            xl: "1200px",
            "2xl": "1400px",
            "3xl": "1600px",
            "4xl": "2000px",
        },
        fontFamily: {
            sans: ["muli", "sans-serif"],
        },
        fontSize: {
            xs: [
                "12px",
                {
                    lineHeight: "2em",
                },
            ],
            sm: [
                "14px",
                {
                    lineHeight: "1.714em",
                },
            ],
            base: [
                "16px",
                {
                    lineHeight: "1.5em",
                },
            ],
            lg: [
                "18px",
                {
                    lineHeight: "1.333em",
                },
            ],
            xl: [
                "24px",
                {
                    lineHeight: "1.333em",
                },
            ],
            "2xl": [
                "30px",
                {
                    lineHeight: "1.333em",
                },
            ],
            "3xl": [
                "36px",
                {
                    lineHeight: "1.333em",
                },
            ],
            "4xl": [
                "42px",
                {
                    lineHeight: "1.333em",
                },
            ],
            "5xl": [
                "48px",
                {
                    lineHeight: "1.167em",
                },
            ],
        },
        extend: {
            colors: {
                primary: {
                    accent: "#FF2D20",
                    contrast: "#FFFFFF",
                    text: "#5F6464",
                },
                secondary: {
                    light: "#F5F5FA",
                    dark: "#F0F2F1",
                    contrast: "#FF2D20",
                },
                tertiary: {
                    light: "#848487",
                    regular: "#525257",
                    dark: "#090910",
                },
            },
            aspectRatio: {
                photo: "17 / 21",
            },
            boxShadow: {
                custom: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 0 6px 0 rgb(0 0 0 / 0.05)",
                "inner-primary": "inset 0 0 0 1px #FF2D20",
                "inner-light": "inset 0 0 0 1px rgba(9, 9, 16, .2)",
                "inner-outer-primary":
                    "inset 0 0 0 1px #FF2D20, 4px 4px 0 -1px #FFFFFF, 4px 4px 0 0 #FF2D20",
                "outer-primary": "4px 4px 0 -1px #FFFFFF, 4px 4px 0 0 #FF2D20",
                "outer-dark": "4px 4px 0 -1px #FFFFFF, 4px 4px 0 0 #000000",
            },
            backgroundImage: {
                "floor-primary":
                    "url(/assets/img/backgrounds/floor-primary.svg)",
                "floor-filled-light":
                    "url(/assets/img/backgrounds/floor-filled-light.svg)",
            },
        },
        plugins: [require("@tailwindcss/typography")],
    },
    purge: {
        options: {
            safelist: [
                // Margins
                "ml-auto",
                "xl:ml-[25%]",
                "xl:mr-[25%]",
                "lg:ml-[25%]",
                // Paddings
                "pl-10",
                "pr-10",
                "sm:pr-5",
                "sm:pl-5",
                // Translates
                "-translate-x-[7.25rem]", // Footer title
            ],
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
