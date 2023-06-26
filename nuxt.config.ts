export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["@/assets/main.css"],
    typescript: {
        strict: true,
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
