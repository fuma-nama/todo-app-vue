<template>
    <div>
        <h1 class="font-bold text-4xl">About</h1>
        <p class="text-slate-400 mt-4">
            This is a simple todo app built with Nuxt.js 3 and Tailwind CSS.
        </p>
        <div class="flex flex-row gap-4 mt-4">
            <a
                href="https://github.com/SonMooSans/todo-app-vue"
                rel="noreferrer noopener"
                class="px-6 py-1.5 font-medium text-sm text-slate-900 bg-cyan-300 rounded-lg transition-colors hover:bg-cyan-400"
            >
                Github
            </a>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: "About",
});

definePageMeta({
    layout: "dashboard",
});
</script>
