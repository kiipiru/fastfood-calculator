<script setup lang="ts">
useHead({
  meta: [{ name: "robots", content: "noindex, nofollow" }],
});
const searchQuery = ref<string>("");
onBeforeMount(() => {
  useDishesStore().fetchDishes();
  useCalculatorStore().initFromStorage();
  useFavoritesStore().initFromStorage();
});
</script>

<template>
  <div class="bg-gray-100 min-h-dvh">
    <PageHeader @input-changed="(v) => (searchQuery = v)" />
    <NuxtRouteAnnouncer />
    <NuxtPage :search-q="searchQuery" />
  </div>
</template>
