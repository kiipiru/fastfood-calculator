export const useFavoritesStore = defineStore('favorites', {
    state: () => {
      return { dishes: new Set<string>()}
    }, actions: {
      initFromStorage() {
        const raw = localStorage.getItem("favorite_dishes");
        if (!raw) return;
        const arr = JSON.parse(raw)
        this.dishes = new Set<string>(arr);
      },
      toggleFavorite(id: string) {
        if (this.dishes.size >= 99 ) {return}
        const current = this.dishes.has(id)
        if (!current) {this.dishes.add(id)}
        else {this.dishes.delete(id)}
        this.saveToStorage()
      },
      saveToStorage() {
        const arr = Array.from(this.dishes)
        localStorage.setItem('favorite_dishes', JSON.stringify(arr))
      },
    },
  })