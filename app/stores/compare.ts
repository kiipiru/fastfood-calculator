export const useComparedStore = defineStore('compared', {
    state: () => {
      return { dishes: new Set<string>()}
    }, actions: {
      initFromStorage() {
        const raw = localStorage.getItem("compared_dishes");
        if (!raw) return;
        const arr = JSON.parse(raw)
        this.dishes = new Set<string>(arr);
      },
      toggleCompared(id: string) {
        if (this.dishes.size >= 4) {return}
        if (this.dishes.has(id)) {
          this.dishes.delete(id);
        } else {
          this.dishes.add(id);
        }
        this.saveToStorage();
      },
      removeFromCompared(id: string) {
        if (!this.dishes.has(id)) {return}
        this.dishes.delete(id);
        this.saveToStorage();
      },
      saveToStorage() {
        const arr = Array.from(this.dishes)
        localStorage.setItem('compared_dishes', JSON.stringify(arr))
      },
    },
  })