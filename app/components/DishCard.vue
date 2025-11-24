<script setup lang="ts">
import Button from './Button.vue';

</script>

<template>
   <div class="flex flex-col rounded-xl bg-white max-w-2xl mx-auto mt-4 pb-4 ">
      <div class="relative max-w-100"><button class="z-10 absolute right-2 top-4 bg-white rounded-full p-1"><svg class="w-6 h-6"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg></button>
         <img class="rounded-xl"
            src="https://images.unsplash.com/photo-1673646961450-8432d46e3a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGJsaW5pfGVufDF8fHx8MTc2MzkyNTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"/>
         <span class="z-10 absolute bottom-4 left-2 bg-white rounded-2xl px-2 py-1">Теремок</span>
      </div>
      <div class="flex flex-col gap-2 my-4 mx-4">
         <h2 class="text-md">Блин с курицей и грибами</h2>
         <p class="text-md">Традиционный русский блин с куриным филе и шампиньонами</p>
         <span class="text-sm text-gray-600">Вес: 250г</span>
      </div>
      <span class="mx-4 my-4">Пищевая ценность (КБЖУ)</span>
      <div class="flex gap-4 max-w-2xl mx-4">
         <Button color="orange" class="w-1/2" text="Добавить в корзину"></Button>
         <Button color="gray" class="w-1/4" text="В избранное"></Button>
         <Button color="blue" class="w-1/4" text="Сравнить"></Button>
      </div>
   </div>
</template>