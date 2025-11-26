<script setup lang="ts">
const dishesStore = useDishesStore();
const emit = defineEmits(['modal-closed'])
</script>

<template>
    <div
      class="fixed inset-0 bg-black/40 z-50 flex justify-center items-start overflow-auto" @click="emit('modal-closed')"
    >
      <DishCard
        :dish="dishesStore.selectedDish !== null ? dishesStore.selectedDish : undefined"
        @card-closed="emit('modal-closed')"
      />
    </div>
</template>
