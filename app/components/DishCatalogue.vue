<script setup lang="ts">
import type { Restaurant } from "~~/types/types";
import restaurantIcon from "~~/assets/icons/restaurant.svg";
import vkusnoIcon from "~~/assets/icons/vkusno-i-tochka.png";
import rosticIcon from "~~/assets/icons/rostics.png";

const props = defineProps<{
  searchQ: string;
  type: "Каталог блюд" | "Избранное";
}>();
const router = useRouter();
const route = useRoute();
const selectedRestaurant = ref<"All" | Restaurant>("All");
const isModalOpen = ref<boolean>(false);
const dishesStore = useDishesStore();
const calculatorStore = useCalculatorStore();
const favoriteStore = useFavoritesStore();
const comparedStore = useComparedStore();
const restaurantFilters = [
  {
    value: "All",
    title: "Все рестораны",
    icon: restaurantIcon,
  },
  {
    value: "Вкусно и точка",
    title: "Вкусно и точка",
    icon: vkusnoIcon,
  },
  {
    value: "Rostic's",
    title: "Rostic's",
    icon: rosticIcon,
  },
] as const;
const selectedDish = computed(() => {
  const dishId = dishesStore.selectedDish;
  if (dishId) {
    return { dish: dishesStore.getDishById(dishId) };
  }
});
const visibleDishes = computed(() => {
  return dishesStore.dishes.filter((dish) => {
    const matchesFavorites =
      props.type !== "Избранное" || favoriteStore.dishes.has(dish.id);

    const matchesRestaurant =
      selectedRestaurant.value === "All" ||
      dish.restaurant === selectedRestaurant.value;

    const matchesSearch =
      !props.searchQ ||
      dish.title.toLowerCase().includes(props.searchQ.toLowerCase());

    return matchesFavorites && matchesRestaurant && matchesSearch;
  });
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
onMounted(async () => {
  const dishId = route.query.dish;
  if (dishId && typeof dishId === "string") {
    const dish = dishesStore.getDishById(dishId);
    if (dish) {
      dishesStore.selectDish(dishId);
      isModalOpen.value = true;
    } else {
      const { dish, ...rest } = route.query;
      router.replace({ query: rest });
    }
  }
});

watch(isModalOpen, () => {
  if (isModalOpen.value) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
});
</script>

<template>
  <main class="px-10 flex flex-col gap-4 pt-8 pb-24">
    <h2 v-once class="text-xl">{{ type }}</h2>
    <div class="flex flex-col sm:flex-row gap-4 overflow-auto">
      <FilterButton
        v-for="item in restaurantFilters"
        :key="item.value"
        :icon="item.icon"
        :title="item.title"
        :is-active="selectedRestaurant === item.value"
        @filter-selected="selectedRestaurant = item.value"
      />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-[600px]"
    >
      <template v-if="visibleDishes.length > 0">
        <DishPreview
          v-for="dish in visibleDishes"
          :key="dish.id"
          :dish="dish"
          @dish-selected="handleDishSelect(dish.id)"
          @dish-favorited="favoriteStore.toggleFavorite(dish.id)"
          :is-favorited="favoriteStore.dishes.has(dish.id)"
        ></DishPreview>
      </template>
      <div
        v-else
        class="col-span-full flex flex-col items-center justify-center py-20 text-gray-400"
      >
        <p class="text-lg font-medium pb-4">Блюда не найдены</p>
        <p class="text-sm max-w-[400px]">
          {{
            type === "Каталог блюд"
              ? "Попробуйте изменить фильтры или очистить поле поиска"
              : "Убедитесь, что вы выбрали избранные блюда, а также попробуйте изменить фильтры или очистить поле поиска"
          }}
        </p>
      </div>
    </div>
  </main>
  <Teleport to="body">
    <DishCardModal
      v-if="isModalOpen"
      @modal-closed="handleModalClosed"
      :dish="selectedDish?.dish"
      @dish-added="
        (id) => {
          calculatorStore.selectDish(id);
          handleModalClosed();
        }
      "
      @dish-favorited="
        (id) => {
          favoriteStore.toggleFavorite(id);
          handleModalClosed();
        }
      "
      @dish-compared="
        (id: string) => {
          comparedStore.toggleCompared(id);
          handleModalClosed();
        }
      "
    />
  </Teleport>
</template>
