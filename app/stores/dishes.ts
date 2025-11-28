import type { Dish } from "../../types/types";

export const useDishesStore = defineStore('dishes', {
    state: () => {
      return { dishes: [] as Dish[], selectedDish: null as string | null }
    }, 
    getters: {
      getDishById(state) {
        return (id: string) => state.dishes.find((el) => el.id === id)
      }
    },
    actions: {
      async fetchDishes() {
        const data = await import("../../assets/data/dishes");
        this.dishes = data.dishes
      },
      selectDish(id: string) {
        this.selectedDish = id
      },
      clearSelected() {
        this.selectedDish = null
      }
    },
  })