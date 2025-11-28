<script setup lang="ts">
const props = defineProps<{ searchQ: string }>();
</script>

<template>
 <DishCatalogue :search-q="searchQ" :type="'Избранное'" />
</template>
