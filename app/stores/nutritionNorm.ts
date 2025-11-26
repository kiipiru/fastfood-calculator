import type { Nutrition } from "~~/types/types";

export const useNutritionNormStore = defineStore('nutritionNorm', {
    state: () => {
      return { nutritionNorm: {calories: 2500, proteins: 156, fats: 83, carbohydrates: 281} as Nutrition}
    }, 
  })