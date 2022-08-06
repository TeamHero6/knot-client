/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            "custom-gray": "#F1F5F9",
            "custom-purple": "#C7D2FE",
            "custom-light-gray": "#F7FAFC",
            "custom-sky-blue": "#2BACF8",
            "custom-green": "#4ADE7F",
            "custom-dark": "#312E81",
            "custom-cyan-100": "#CFFAFE",
            "custom-cyan-500": "#00bfff",
            "custom-cyan-300": "#67E8F9",
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
