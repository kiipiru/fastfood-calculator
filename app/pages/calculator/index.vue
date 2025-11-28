<script setup lang="ts">
import calculatorIcon from "~~/assets/icons/calculator.svg";
import type { Dish, Nutrition } from "~~/types/types";
const dishesStore = useDishesStore();
const calculator = useCalculatorStore();
const nutritionNorm = useNutritionNormStore();
const dishes = computed(() => {
  const dishesArr: { dish: Dish; count: number }[] = [];
  for (const [dishId, count] of calculator.dishes) {
    const dish = dishesStore.getDishById(dishId);
    if (dish) {
      dishesArr.push({ dish: dish, count: count });
    }
  }
  return dishesArr;
});
const currentNutrition = computed(() => {
  const nutritionObj = { calories: 0, proteins: 0, fats: 0, carbohydrates: 0 };
  for (const { dish, count } of dishes.value) {
    for (const key in nutritionObj) {
      const k = key as keyof Nutrition;
      nutritionObj[k] += dish.nutrition[k] * count;
    }
  }
  return nutritionObj;
});
</script>

<template>
  <main v-if="calculator.dishes.size === 0 && calculator.isReady" class="max-w-xl mx-auto my-40">
    <div class="flex flex-col items-center gap-4">
      <img class="w-[100px]" :src="calculatorIcon" />
      <h2>Пока пусто 😞</h2>
      <p>Добавьте блюда из каталога, чтобы рассчитать калории</p>
      <Button
        class="px-8 py-3 rounded-3xl"
        color="orange"
        text="Перейти в каталог"
        @button-pressed="navigateTo('/menu')"
      ></Button>
    </div>
  </main>
  <main v-else class="mx-4 sm:mx-8 md:mx-20 my-8">
    <div class="flex flex-col gap-12">
      <div class="flex justify-between">
        <h2 class="text-2xl font-bold">Калькулятор</h2>
        <NuxtLink class="flex items-center gap-1" to="/menu">
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
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex flex-col gap-4 w-full">
          <CalculatorCard
            v-for="dish in dishes"
            :dish="dish.dish"
            :dish-count="dish.count"
            @dish-added="calculator.selectDish(dish.dish.id)"
            @dish-removed="calculator.deleteDish(dish.dish.id)"
            @dish-removed-completely="calculator.removeDish(dish.dish.id)"
          />
        </div>
        <CaloriesCalculator
          :current-value="currentNutrition"
          :max-value="nutritionNorm.nutritionNorm"
          @gender-chosen="(g) => nutritionNorm.changeNutritionNorm(g)"
        />
      </div>
    </div>
  </main>
</template>
