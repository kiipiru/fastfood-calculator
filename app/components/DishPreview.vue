<script setup lang="ts">
import { type Dish } from "~~/types/types";

const props = defineProps<{ dish: Dish; isFavorited: boolean }>();
const caloriesClass = computed(() => {
  if (props.dish.nutrition.calories < 600) {
    return "text-green-400";
  }
  if (props.dish.nutrition.calories < 800) {
    return "text-yellow-400";
  }
  return "text-red-400";
});
const favoriteClasses = computed(() => {
  if (props.isFavorited) {
    return { button: "bg-red-500 scale-105", img: "invert scale-105" };
  } else return { button: "bg-gray-100", img: "" };
});
const emit = defineEmits(["dish-selected", "dish-favorited"]);
</script>

<template>
  <div
    class="flex flex-col max-w-m rounded-2xl bg-white gap-4 cursor-pointer shadow-lg"
    @click="emit('dish-selected')"
  >
    <div class="relative">
      <button
        class="group size-12 absolute right-8 top-4 rounded-full p-2 hover:bg-red-400 transition duration-300"
        :class="favoriteClasses.button"
        @click="
          (e) => {
            e.stopPropagation();
            emit('dish-favorited');
          }
        "
      >
        <img
          class="group-hover:invert"
          :class="favoriteClasses.img"
          src="/heart.svg"
          alt="Иконка сердца"
        />
      </button>
      <img
        class="rounded-2xl object-scale-down w-full py-8 aspect-video"
        :src="dish.image"
        :alt="`Изображение блюда ${dish.title}`"
      />
      <span
        class="absolute left-8 bottom-4 bg-orange-400 rounded-2xl px-4 py-1"
        >{{ dish.restaurant }}</span
      >
    </div>
    <div class="flex flex-col px-4 gap-4 h-full justify-between">
      <div class="flex flex-col gap-4">
        <h3 class="font-medium">{{ dish.title }}</h3>
        <p class="text-sm">{{ dish.description }}</p>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <span>Калории</span>
          <span :class="caloriesClass" class="font-semibold"
            >{{ dish.nutrition.calories }} ккал</span
          >
        </div>
        <div class="flex gap-4 pb-8">
          <div
            class="flex flex-col bg-gray-100 w-full py-2 rounded-xl items-center"
          >
            <span>Белки</span>
            <span>{{ dish.nutrition.proteins }}г</span>
          </div>
          <div
            class="flex flex-col bg-gray-100 w-full py-2 rounded-xl items-center"
          >
            <span>Жиры</span>
            <span>{{ dish.nutrition.fats }}г</span>
          </div>
          <div
            class="flex flex-col bg-gray-100 w-full py-2 rounded-xl items-center"
          >
            <span>Углеводы</span>
            <span>{{ dish.nutrition.carbohydrates }}г</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
