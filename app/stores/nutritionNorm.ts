import type { Nutrition } from "~~/types/types";

export const useNutritionNormStore = defineStore('nutritionNorm', {
    state: () => {
      return { nutritionNorm: {calories: 2500, proteins: 156, fats: 83, carbohydrates: 281} as Nutrition}
    }, 
    actions: {changeNutritionNorm(gender: 'male' | 'female') {
      if (gender === 'male') {this.$reset()}
        else {this.nutritionNorm = {
          calories: 1800,
          proteins: 113,
          fats: 60,
          carbohydrates: 203
        }}
      }
    }}
  )