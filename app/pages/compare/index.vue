<script setup lang="ts">
definePageMeta({
  title: "Сравнение блюд",
  meta: [
    {
      name: "description",
      content: "Сравнение блюд по КБЖУ",
    },
  ],
});
const comparedStore = useComparedStore();
const dishesStore = useDishesStore();
const dishes = computed(() => {
  return dishesStore.dishes.filter((dish) => comparedStore.dishes.has(dish.id));
});
const nutrition = computed(() => {
  const nutritionArr = dishes.value.map((dish) => dish.nutrition);
  return nutritionArr;
});
const gridCols = computed(() => {
  return `minmax(160px, 1.2fr) repeat(${dishes.value.length}, minmax(140px, 1fr))`;
});
</script>

<template>
  <main class="mx-4 sm:mx-8 md:mx-20 mt-8 pb-24 md:pb-8 flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Сравнение блюд</h1>
      <NuxtLink class="flex items-center sm:gap-1" to="/menu">
        <svg
          class="size-6 text-orange-400 p-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <button class="text-orange-500 font-semibold">
          Вернуться в каталог
        </button>
      </NuxtLink>
    </div>
    <template v-if="dishes.length > 0">
      <div class="flex flex-col md:flex-row gap-4 md:overflow-x-auto justify-start">
        <CompareCard
          v-for="dish in dishes"
          :key="dish.id"
          :dish="dish"
          @dish-removed="comparedStore.removeFromCompared(dish.id)"
        />
      </div>
      <div class="bg-white rounded-xl">
        <div
          class="grid gap-x-4 p-4 items-center border-grey-400 rounded-xl"
          :style="{ gridTemplateColumns: gridCols }"
        >
          <span class="font-semibold">Показатель</span>
          <span
            class="font-semibold text-center"
            v-for="d in dishes"
            :key="d.id"
          >
            {{ d.title }}
          </span>
        </div>

        <NutritionComparisonBar :values="nutrition" :cols="dishes.length" />
      </div>
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
        <p class="text-sm text-gray-700">
          <span class="font-medium">💡 Подсказка:</span> Зеленая галочка
          отмечает лучшее значение в каждой категории. Для калорий и жиров —
          меньше лучше, для белков и углеводов — больше лучше.
        </p>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col items-center h-full">
        <p class="text-gray-500">Нет блюд для сравнения</p>
      </div>
    </template>
  </main>
</template>
