<script setup lang="ts">
import { type Restaurant } from "~~/types/types";
const props = defineProps<{
  title: "Все рестораны" | Restaurant;
  icon: string;
  isActive: boolean;
}>();
const emit = defineEmits(["filter-selected"]);
</script>

<template>
  <button
    class="rounded-3xl text-xl px-8 py-4 min-w-fit border-2 border-grey-400 hover:border-orange-400 transition flex gap-2"
    :class="isActive ? 'bg-orange-600 text-white' : 'bg-white text-black'"
    v-on:click="emit('filter-selected')"
  >
  <div class="size-8 rounded-full bg-white flex items-center justify-center p-1.5">
    <img class="size-6 object-contain" :src="icon" />
  </div>
    <span>{{ title }}</span>
  </button>
</template>
