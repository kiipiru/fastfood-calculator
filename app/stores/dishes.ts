import type { Dish } from "../../types/types";

export const useDishesStore = defineStore('dishes', {
    state: () => {
      return { dishes: [] as Dish[] }
    }, actions: {
      async fetchDishes() {
        const data = await import("../../assets/data/dishes");
        this.dishes = data.dishes
      },
    },
  })