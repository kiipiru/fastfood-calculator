export const useCalculatorStore = defineStore("calculator", {
  state: () => {
    return { dishes: new Map<string, number>(), isReady: false as boolean};
  },
  actions: {
    initFromStorage() {
      const raw = localStorage.getItem("calculator_dishes");
      if (raw) {
      const obj = JSON.parse(raw);
      this.dishes = new Map<string, number>(Object.entries(obj));}
      this.isReady = true
    },
    selectDish(id: string) {
      const current = this.dishes.get(id);
      if (this.dishes.size >= 15) return;
      current ? this.dishes.set(id, current + 1) : this.dishes.set(id, 1);
      this.saveToStorage()
    },
    deleteDish(id: string) {
      const current = this.dishes.get(id);
      if (!current) return;
      if (current === 1) {
        this.dishes.delete(id);
      } else this.dishes.set(id, current - 1);
      this.saveToStorage()
    },
    removeDish(id: string) {
      this.dishes.delete(id);
      this.saveToStorage()
    },
    saveToStorage() {
      const obj = Object.fromEntries(this.dishes.entries());
      localStorage.setItem("calculator_dishes", JSON.stringify(obj));
    },
  },
});
