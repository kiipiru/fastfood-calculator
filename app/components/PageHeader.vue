<script setup lang="ts">
const searchQuery = ref<string>('')
const emit = defineEmits(['input-changed'])
const route = useRoute()
const favoritesStore = useFavoritesStore()
const calculatorStore = useCalculatorStore()
const showInput = computed(() => {
  return ['/menu', '/favorites'].includes(route.path)
})
</script>

<template>
  <header class="bg-white flex py-4 px-10 gap-2 justify-between shadow-md w-full">
    <NuxtLink to="/menu" class="flex shrink-0 gap-2">
      <img src="/logo.svg" class="h-12 rounded-full bg-orange-400 p-1" alt="Logo" />
      <div class="hidden md:flex flex-col items-center">
        <h1 class=" text-orange-600 font-semibold">
          Калькулятор Калорий
        </h1>
        <span class="text-sm">Русского Фастфуда</span>
      </div>
    </NuxtLink>
    <input v-if="showInput" @input="emit('input-changed', searchQuery.trim())" v-model="searchQuery"
      class="flex-1 rounded-3xl border-2 focus:border-orange-500 px-4 py-2 outline-none"
      placeholder="Поиск блюд"></input>
    <p class="text-xs sm:text-sm xl:text-lg text-gray-500 self-center" v-else>Помните: сбалансированное питание невозможно при постоянном употреблении только фастфуда.</p>
    <nav class="hidden md:flex gap-2">
      <NavigationButton type="Избранное" :amount="favoritesStore.dishes.size"
        @navigation-button-clicked="navigateTo('/favorites')" icon="/heart.svg" />
      <NavigationButton type="Калькулятор" :amount="calculatorStore.dishes.size"
        @navigation-button-clicked="navigateTo('/calculator')" icon="/cart.svg" />
    </nav>
  </header>
</template>