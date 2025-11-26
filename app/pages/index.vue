<script setup lang="ts">
import type { Restaurant } from '~~/types/types';

const selectedRestaurant = ref<'All' | Restaurant>('All')
const dishesStore = useDishesStore()
const visibleDishes = computed(() => {
    if (selectedRestaurant.value === 'All') return dishesStore.dishes
    else return dishesStore.dishes.filter((dish) => dish.restaurant === selectedRestaurant.value)
})
onBeforeMount(() => dishesStore.fetchDishes())
</script>

<template>
    <main class="px-10 flex flex-col gap-4 pt-4">
        <h2 class="text-xl">Каталог блюд</h2>
        <div class="flex gap-4 my-4 overflow-auto">
        <FilterButton :class="selectedRestaurant === 'All' ? 'bg-orange-600 text-white' : 'bg-white text-black'" title="Все рестораны" v-on:filter-selected="selectedRestaurant='All'"/>
        <FilterButton :class="selectedRestaurant === 'Вкусно и точка' ? 'bg-orange-600 text-white' : 'bg-white text-black'"  title="Вкусно и точка" v-on:filter-selected="selectedRestaurant='Вкусно и точка'"/>
        <FilterButton :class="selectedRestaurant === `Rostic's` ? 'bg-orange-600 text-white' : 'bg-white text-black'"  title="Rostic's" v-on:filter-selected="selectedRestaurant=`Rostic's`"/>
    </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DishPreview v-for="dish in visibleDishes" :dish="dish"/>
        </div>
        <DishCard></DishCard>
    </main>
</template>