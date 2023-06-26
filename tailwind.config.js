/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1200px",
                },
            },
        },
    },
    plugins: [],
};
