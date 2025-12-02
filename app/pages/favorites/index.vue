<script setup lang="ts">
definePageMeta({
  title: "Избранные блюда — фастфуд «Вкусно и точка» и Rostic’s",
  meta: [
    {
      name: "description",
      content:
        "Список избранных блюд из сетей фастфуда «Вкусно и точка» и Rostic’s. Быстрый доступ к сохранённым позициям с КБЖУ и описанием.",
    },
    {
      name: "keywords",
      content:
        "избранные блюда, избранное, фастфуд, Вкусно и точка, Rostic’s, сохранённые блюда, КБЖУ",
    },
    {
      property: "og:title",
      content: "Избранные блюда — фастфуд «Вкусно и точка» и Rostic’s",
    },
    {
      property: "og:description",
      content:
        "Просматривайте и управляйте избранными блюдами из сетей фастфуда «Вкусно и точка» и Rostic’s. Карточки с калориями, белками, жирами и углеводами.",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://fastfood-calculator.vercel.app/favorites",
    },
  ],
});
const props = defineProps<{ searchQ: string }>();
</script>

<template>
  <DishCatalogue :search-q="searchQ" :type="'Избранное'" />
</template>
