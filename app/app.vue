<script setup lang="ts">
const searchQuery = ref<string>('')
</script>

<template>
  <div class="bg-gray-100 w-full h-dvh">
    <PageHeader @input-changed="(v) => searchQuery = v"/>
    <NuxtRouteAnnouncer />
    <NuxtPage :search-q="searchQuery"/>
  </div>
</template>
