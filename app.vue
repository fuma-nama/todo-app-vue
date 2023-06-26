<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const image = new URL("/open-graph.png", useRequestURL());

useSeoMeta({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Todo App` : "Todo App";
    },
    description: "A simple todo app",
    ogTitle: "Todo App",
    ogType: "website",
    ogImage: image.toString(),
    ogImageWidth: 900,
    ogImageHeight: 473,
    ogImageAlt: "Todo App",
    twitterCard: "summary_large_image",
});
</script>
