<script setup lang="ts">
import type { Restaurant } from "~~/types/types";
definePageMeta({ name: "menu" });
const props = defineProps<{ searchQ: string }>();
const router = useRouter();
const route = useRoute();
const selectedRestaurant = ref<"All" | Restaurant>("All");
const isModalOpen = ref<boolean>(false);
const dishesStore = useDishesStore();
const visibleDishes = computed(() => {
  let result = [];
  if (selectedRestaurant.value === "All") {
    result = dishesStore.dishes;
  } else {
    result = dishesStore.dishes.filter(
      (dish) => dish.restaurant === selectedRestaurant.value
    );
  }
  return props.searchQ
    ? (result = result.filter(
        (e) => e.title.toLowerCase().includes(props.searchQ.toLowerCase())
      ))
    : result;
});
function handleDishSelect(id: string) {
  dishesStore.selectDish(id);
  router.push({ query: { ...route.query, dish: id } });
  isModalOpen.value = true;
}
function handleModalClosed() {
  dishesStore.clearSelected();
  const { dish, ...rest } = route.query;
  router.push({ query: rest });
  isModalOpen.value = false;
}
watch(isModalOpen, () => {
  if (isModalOpen.value) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
});
onBeforeMount(() => dishesStore.fetchDishes());
</script>

<template>
  <main class="px-10 flex flex-col gap-4 pt-4">
    <h2 v-once class="text-xl">Каталог блюд</h2>
    <div class="flex gap-4 my-4 overflow-auto">
      <FilterButton
        :class="
          selectedRestaurant === 'All'
            ? 'bg-orange-600 text-white'
            : 'bg-white text-black'
        "
        title="Все рестораны"
        v-on:filter-selected="selectedRestaurant = 'All'"
      />
      <FilterButton
        :class="
          selectedRestaurant === 'Вкусно и точка'
            ? 'bg-orange-600 text-white'
            : 'bg-white text-black'
        "
        title="Вкусно и точка"
        v-on:filter-selected="selectedRestaurant = 'Вкусно и точка'"
      />
      <FilterButton
        :class="
          selectedRestaurant === `Rostic's`
            ? 'bg-orange-600 text-white'
            : 'bg-white text-black'
        "
        title="Rostic's"
        v-on:filter-selected="selectedRestaurant = `Rostic's`"
      />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <DishPreview
        v-for="dish in visibleDishes"
        :dish="dish"
        @dish-selected="handleDishSelect(dish.id)"
      ></DishPreview>
    </div>
  </main>
  <Teleport to="body">
    <DishCardModal v-if="isModalOpen" @modal-closed="handleModalClosed()" />
  </Teleport>
</template>
