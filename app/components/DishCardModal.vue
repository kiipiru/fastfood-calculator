<script setup lang="ts">
import type { Dish } from "~~/types/types";

const props = defineProps<{ dish: Dish | undefined }>();
const emit = defineEmits(["modal-closed", "dish-added", "dish-favorited", "dish-compared"]);
</script>

<template>
  <div
    class="fixed inset-0 bg-black/40 z-50 flex justify-center items-start overflow-auto"
    @click="emit('modal-closed')"
  >
    <DishCard
      :dish="dish"
      @card-closed="emit('modal-closed')"
      @dish-added="(id) => emit('dish-added', id)"
      @dish-favorited="(id) => emit('dish-favorited', id)"
      @dish-compared="(id) => emit('dish-compared', id)"
    />
  </div>
</template>
