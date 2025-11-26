<script install lang="ts">

</script>

<template>
  <div class="bg-gray-100 w-dvw h-full">
    <header class="bg-white flex py-4 px-10 gap-4 shadow-md">
      <a href="/" class="flex shrink-0 gap-2">
        <img src="/logo.svg" class="h-12 rounded-full bg-orange-400 p-1" alt="Logo" />
        <div class="hidden md:flex flex-col items-center">
          <h1 class=" text-orange-600 font-semibold">
            Калькулятор Калорий
          </h1>
          <span class="text-sm">Русского Фастфуда</span>
        </div>
      </a>
      <input class="flex-1 rounded-2xl border border-orange-400 p-2" placeholder="Типа серчбар"></input>
      <nav class="hidden md:flex gap-2">
        <NavigationButton icon="/heart.svg"/>
        <NavigationButton icon="/cart.svg"/>
      </nav>
    </header>
    <NuxtRouteAnnouncer />
    <NuxtPage/>
  </div>
</template>
