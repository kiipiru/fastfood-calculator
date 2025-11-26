<script setup lang="ts">
import { type Restaurant } from '~~/types/types';
const props = defineProps<{title: 'Все рестораны' | Restaurant}>()
const emit = defineEmits(['filter-selected'])
</script>

<template>
    <button class="rounded-3xl text-xl px-8 py-4 min-w-fit" v-on:click="emit('filter-selected')">{{ title }}</button>
</template>