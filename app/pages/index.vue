<script setup lang="ts">
definePageMeta({
  title: 'Fastfood Calculator — подсчёт КБЖУ блюд фастфуда',
  meta: [
    {
      name: 'description',
      content:
        'Онлайн-калькулятор КБЖУ для блюд фастфуда «Вкусно и точка» и Rostic’s. Каталог блюд, избранное и калькулятор калорий с дневной нормой.',
    },
  ],
});
await navigateTo('/menu')
</script>