<script setup lang="ts">
const searchQuery = ref<string>("");

const {data: dishes} = await 
useAsyncData('dishes', async () => {
  const data = await import("~~/assets/data/dishes")
  return data.dishes
})

if (dishes.value) {
  useDishesStore().dishes = dishes.value;
}

onBeforeMount(() => {
  useCalculatorStore().initFromStorage();
  useFavoritesStore().initFromStorage();
});
</script>

<template>
  <div class="bg-gray-100 min-h-dvh">
    <PageHeader @input-changed="(v) => (searchQuery = v)" />
    <NuxtRouteAnnouncer />
    <NuxtPage :search-q="searchQuery" />
    <PageFooter/>
  </div>
</template>
