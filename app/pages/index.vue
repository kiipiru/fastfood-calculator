<script setup lang="ts">
import type { Restaurant } from '../../types/types'
const selectedRestaurant = ref<'All' | Restaurant>('All')
</script>

<template>
    <main class="px-10 pt-4">
        <h2>Каталог блюд</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DishPreview/>
            <DishPreview/>
            <DishPreview/>
            <DishPreview/>
            <DishPreview/>
            <DishPreview/>
            <DishPreview/>
        </div>
        <DishCard></DishCard>
    </main>
</template>