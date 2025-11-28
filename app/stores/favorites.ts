export const useFavoritesStore = defineStore('favorites', {
    state: () => {
      return { dishes: new Set<string>()}
    }, actions: {
      toggleFavorite(id: string) {
        if (this.dishes.size >= 99 ) {return}
        const current = this.dishes.has(id)
        if (!current) {this.dishes.add(id)}
        else {this.dishes.delete(id)}
      },
    },
  })