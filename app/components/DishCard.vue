<script setup lang="ts">
import type { Dish } from "~~/types/types";
import Button from "./Button.vue";
const props = defineProps<{ dish?: Dish }>();
const emit = defineEmits(["card-closed", "dish-added", "dish-favorited"]);
const nutritionNorm = useNutritionNormStore().nutritionNorm;
</script>

<template>
  <div
    v-if="dish"
    class="flex flex-col rounded-2xl bg-white w-4/5 max-w-xl mx-auto my-2 pb-4 z-100"
    @click.stop
  >
    <div class="relative max-w-100 flex flex-col">
      <button
        class="z-10 absolute right-4 top-4 bg-white rounded-full p-1"
        @click="(e: MouseEvent) =>emit('card-closed', e)"
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
      <img
        class="rounded-xl w-3/5 object-contain self-center pt-4"
        :src="dish?.image"
        :alt="`Изображение блюда ${dish?.title}`"
      />
      <span
        class="z-10 absolute bottom-4 left-4 rounded-2xl px-4 py-1 bg-gray-50 border border-black"
        >{{ dish.restaurant }}</span
      >
    </div>
    <div class="flex flex-col gap-2 my-4 mx-6">
      <h2 class="text-md">{{ dish.title }}</h2>
      <p class="text-md">{{ dish.description }}</p>
      <span class="text-sm text-gray-600">Вес: {{ dish.weight }}</span>
    </div>
    <span class="mx-6 my-4">Пищевая ценность (КБЖУ)</span>
    <div class="grid grid-cols-2 grid-rows-2 md:flex md:justify-between pb-4 px-8">
      <NutritionCircle
        title="Калории"
        :value="dish?.nutrition.calories"
        :max="nutritionNorm.calories"
        color="orange"
        type="ккал"
      />
      <NutritionCircle
        title="Белки"
        :value="dish?.nutrition.proteins"
        :max="nutritionNorm.proteins"
        color="blue"
        type="г"
      />
      <NutritionCircle
        title="Жиры"
        :value="dish?.nutrition.fats"
        :max="nutritionNorm.fats"
        color="yellow"
        type="г"
      />
      <NutritionCircle
        title="Жиры"
        :value="dish?.nutrition.carbohydrates"
        :max="nutritionNorm.carbohydrates"
        color="green"
        type="г"
      />
    </div>
    <div class="flex flex-col md:flex-row gap-4 max-w-2xl mx-6">
      <Button color="orange" class="w-full md:w-1/2" text="Добавить в калькулятор" @button-pressed="emit('dish-added', dish.id)"></Button>
      <Button color="red" class="w-full md:w-1/2 bg-red-500" text="В избранное" @button-pressed="emit('dish-favorited', dish.id)"></Button>
    </div>
  </div>
</template>
