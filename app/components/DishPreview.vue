<script setup lang="ts">
import {type Dish } from '~~/types/types';

const props = defineProps<{dish: Dish}>()
const caloriesClass = computed(() => {
  if (props.dish.calories < 500) {
    return "text-green-400"
  }
  if (props.dish.calories < 700) {
    return 'text-yellow-400'
  }
  return 'text-red-400'
})
</script>

<template>
  <div class="flex flex-col max-h-[650px] max-w-m rounded-2xl bg-white gap-4 cursor-pointer">
    <div class="relative h-3/5">
      <button class="size-12 absolute right-8 top-4 bg-gray-100 rounded-full p-2">
        <img src="/heart.svg"  />
      </button>
      <img
        class="rounded-2xl object-contain h-full w-full "
        :src="dish.image"
      />
      <span class="absolute left-8 bottom-4 bg-orange-400 rounded-2xl px-4 py-1">{{ dish.restaurant }}</span>
    </div>
    <div class="flex flex-col px-4 justify-between h-full gap-4">
      <div class="flex flex-col gap-4"><h3 class="font-medium">{{ dish.title }}</h3>
      <p>{{ dish.description }}</p>
    </div>
      <div class="flex flex-col gap-4"><div class="flex justify-between">
        <span>Калории</span>
        <span :class="caloriesClass" class="font-semibold">{{ dish.calories }} ккал</span>
      </div>
      <div class="flex gap-4 pb-8">
        <div class="flex flex-col bg-gray-100 w-full py-2 rounded-xl items-center">
          <span>Белки</span>
          <span>{{ dish.proteins }}г</span>
        </div>
        <div class="flex flex-col bg-gray-100 w-full py-2 rounded-xl items-center">
          <span>Жиры</span>
          <span>{{ dish.fats }}г</span>
        </div>
        <div class="flex flex-col bg-gray-100 w-full py-2 rounded-xl items-center">
          <span>Углеводы</span>
          <span>{{ dish.carbohydrates }}г</span>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
