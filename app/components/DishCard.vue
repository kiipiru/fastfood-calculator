<script setup lang="ts">
import type { Dish } from "~~/types/types";
import Button from "./Button.vue";
const props = defineProps<{ dish?: Dish }>();
const emit = defineEmits(["card-closed"]);
const nutritionNorm = useNutritionNormStore().nutritionNorm;
onMounted(() => {
  if (!props.dish) {
    useRouter().push("/menu");
  }
});
</script>

<template>
  <div
    v-if="dish"
    class="flex flex-col rounded-xl bg-white w-4/5 max-w-xl mx-auto mt-4 pb-4 z-100"
    @click.stop
  >
    <div class="relative max-w-100 flex flex-col">
      <button
        class="z-10 absolute right-2 top-4 bg-white rounded-full p-1"
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
        class="rounded-xl w-3/5 object-contain self-center"
        :src="dish?.image"
        :alt="`Изображение блюда ${dish?.title}`"
      />
      <span
        class="z-10 absolute bottom-4 left-2 rounded-2xl px-2 py-1 bg-gray-50 border border-black"
        >{{ dish.restaurant }}</span
      >
    </div>
    <div class="flex flex-col gap-2 my-4 mx-4">
      <h2 class="text-md">{{ dish.title }}</h2>
      <p class="text-md">{{ dish.description }}</p>
      <span class="text-sm text-gray-600">Вес: {{ dish.weight }}</span>
    </div>
    <span class="mx-4 my-4">Пищевая ценность (КБЖУ)</span>
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
    <div class="flex flex-col md:flex-row gap-4 max-w-2xl mx-4">
      <Button color="orange" class="w-full md:w-1/2" text="Добавить в корзину"></Button>
      <Button color="gray" class="w-full md:w-1/4" text="В избранное"></Button>
      <Button color="blue" class="w-full md:w-1/4" text="Сравнить"></Button>
    </div>
  </div>
</template>
