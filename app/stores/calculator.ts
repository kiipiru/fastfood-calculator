export const useCalculatorStore = defineStore('calculator', {
    state: () => {
      return { dishes: new Map<string, number>()}
    }, actions: {
      selectDish(id: string) {
        const current = this.dishes.get(id)
        if (this.dishes.size >= 15) return
        current ? this.dishes.set(id, current + 1) : this.dishes.set(id, 1)
      },
      deleteDish(id: string) {
        const current = this.dishes.get(id)
        if (!current) return
        if (current === 1) {
            this.dishes.delete(id)
        }
        else this.dishes.set(id, current - 1)
      },
      removeDish(id: string) {
        this.dishes.delete(id)
      }
    },
  })