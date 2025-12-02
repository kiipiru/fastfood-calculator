<script setup lang="ts">
const favoritesStore = useFavoritesStore();
const calculatorStore = useCalculatorStore();
</script>

<template>
  <footer
    class="fixed md:hidden bottom-0 left-0 w-full bg-white border-t shadow-sm"
  >
    <nav class="flex justify-around bg-white w-full pt-1.5">
      <div class="flex flex-col items-center">
        <NavigationButton
          :amount="favoritesStore.dishes.size"
          @navigation-button-clicked="navigateTo('/favorites')"
          icon="/burger.svg"
        />
        <span>Главная</span>
      </div>
      <div class="flex flex-col items-center">
        <NavigationButton
          type="Избранное"
          :amount="favoritesStore.dishes.size"
          @navigation-button-clicked="navigateTo('/favorites')"
          icon="/heart.svg"
        />
        <span>Избранное</span>
      </div>
      <div class="flex flex-col items-center">
        <NavigationButton
          type="Калькулятор"
          :amount="calculatorStore.dishes.size"
          @navigation-button-clicked="navigateTo('/calculator')"
          icon="/cart.svg"
        />
        <span>Калькулятор</span>
      </div>
    </nav>
  </footer>
</template>
