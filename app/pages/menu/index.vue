<script setup lang="ts">
definePageMeta({
  title: 'Каталог блюд — фастфуд «Вкусно и точка» и Rostic’s',
  meta: [
    {
      name: 'description',
      content:
        'Каталог блюд сетей фастфуда «Вкусно и точка» и Rostic’s. Фильтры по ресторанам, удобный поиск, карточки с КБЖУ и подробной информацией о каждом блюде.',
    },
    {
      name: 'keywords',
      content:
        'каталог блюд, фастфуд, Вкусно и точка, Rostic’s, калории, КБЖУ, еда, меню',
    },
    {
      property: 'og:title',
      content: 'Каталог блюд — фастфуд «Вкусно и точка» и Rostic’s',
    },
    {
      property: 'og:description',
      content:
        'Просматривайте блюда из сетей фастфуда «Вкусно и точка» и Rostic’s, сравнивайте калории, белки, жиры и углеводы и подбирайте рацион.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://fastfood-calculator.vercel.app/menu', 
    }
  ],
});
const props = defineProps<{ searchQ: string }>();
</script>

<template>
  <DishCatalogue :search-q="searchQ" :type="'Каталог блюд'" />
</template>
