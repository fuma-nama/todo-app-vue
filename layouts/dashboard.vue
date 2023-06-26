<template>
    <nav
        class="sticky top-0 w-full py-2 bg-gradient-to-b from-slate-800 to-slate-950"
    >
        <div class="container flex flex-row gap-4 items-center">
            <NuxtLink class="font-medium" to="/">Todo App</NuxtLink>
            <NuxtLink
                class="text-sm ml-4 font-medium"
                :class="[
                    route.path === '/about'
                        ? 'text-cyan-300'
                        : 'text-slate-400',
                ]"
                to="/about"
            >
                About
            </NuxtLink>
        </div>
    </nav>
    <main class="container pt-16 flex-1 flex flex-col">
        <slot />
    </main>
</template>

<script setup>
const route = useRoute();
</script>
