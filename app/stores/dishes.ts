import type { Dish } from "../../types/types";

export const useDishesStore = defineStore('dishes', {
    state: () => {
      return { dishes: [] as Dish[], selectedDish: null as null | Dish }
    }, actions: {
      async fetchDishes() {
        const data = await import("../../assets/data/dishes");
        this.dishes = data.dishes
      },
      selectDish(id: string) {
        this.selectedDish = this.dishes.find((el) => el.id === id) ?? null
      },
      clearSelected() {
        this.selectedDish = null
      }
    },
  })