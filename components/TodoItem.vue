<template>
    <div
        class="flex flex-row items-start gap-4 rounded-lg p-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800"
    >
        <p class="w-0 flex-1"><slot /></p>
        <button
            class="ml-auto text-sm font-medium px-3 py-1 rounded-md bg-red-600 shadow-lg shadow-red-400/50"
            @click="() => $emit('remove')"
        >
            Delete
        </button>
    </div>
</template>

<script setup lang="ts">
defineEmits<{
    (e: "remove"): void;
}>();
</script>
