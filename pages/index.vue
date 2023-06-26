<template>
    <h1 class="font-bold text-4xl">Tasks</h1>
    <div class="flex flex-col gap-4 mt-4 flex-1">
        <p v-if="items.length === 0" class="text-slate-400">Nothing here...</p>
        <TodoItem
            v-for="(item, index) in items"
            @remove="items = items.filter((_, i) => i !== index)"
        >
            {{ item }}
        </TodoItem>
        <form
            class="sticky bottom-0 mt-auto flex flex-row gap-4 bg-slate-950 pb-10"
            @submit="addItem"
            @submit.prevent
        >
            <input
                v-model="text"
                class="w-full border border-slate-600 text-sm rounded-xl px-4 py-2 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 placeholder:text-slate-400"
                placeholder="Type something here..."
                required
            />
        </form>
    </div>
</template>

<script setup lang="ts">
const items = ref<string[]>([]);
const text = ref("");

function addItem() {
    if (text.value.trim().length === 0) return;
    items.value.push(text.value);
    text.value = "";
}

definePageMeta({
    layout: "dashboard",
});
</script>
