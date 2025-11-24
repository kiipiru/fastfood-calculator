<script install lang="ts"></script>

<template>
    <div class=" w-dvw h-dvh">
  <header class="flex py-4 px-10 gap-4">
    <a href="/" class="flex shrink-0 gap-2">
      <img
        src="/logo.svg"
        class="h-12 rounded-full bg-orange-400 p-1"
        alt="Logo"
      />
      <div class="hidden md:flex flex-col items-center">
        <h1 class=" text-orange-600 font-semibold">
          Калькулятор Калорий
        </h1>
        <span class="text-sm">Русского Фастфуда</span>
      </div>
    </a>
    <input class="flex-1 rounded-2xl border border-orange-400 p-2" placeholder="Типа серчбар"></input>
    <nav class="hidden md:flex gap-2"><NavigationButton icon="/heart.svg" >
    </NavigationButton>
  <NavigationButton icon="/cart.svg"></NavigationButton></nav>
  </header>
    <NuxtRouteAnnouncer />
    <DishCard></DishCard>
  </div>
</template>
