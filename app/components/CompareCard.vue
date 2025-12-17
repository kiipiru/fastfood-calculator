<script lang="ts" setup>
import type { Dish } from "~~/types/types";
defineProps<{ dish: Dish }>();
const emit = defineEmits(["dish-removed"]);
</script>

<template>
  <div
    class="flex flex-col gap-4 rounded-2xl bg-white w-1/4 min-w-[280px] w-full max-h-96 my-2 px-4 pb-4 shadow-md"
  >
    <div class="flex flex-col relative">
      <img
        class="w-full h-48 object-contain"
        :src="dish.image"
        :alt="dish.title"
      />
      <button
        class=" absolute right-4 top-4 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
        @click="() => emit('dish-removed')"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <span
        class="absolute bottom-0 left-4 rounded-2xl px-4 py-1 bg-orange-400 border border-black"
        >{{ dish.restaurant }}</span
      >
    </div>
    <h2 class="text-md font-semibold">{{ dish.title }}</h2>
    <p class="text-sm text-gray-600 overflow-hidden text-ellipsis line-clamp-2">
      {{ dish.description }}
    </p>
  </div>
</template>
