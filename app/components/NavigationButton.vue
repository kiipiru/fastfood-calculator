<script setup lang="ts">
const {icon} = defineProps<{icon: string}>()
const emit = defineEmits(['navigation-button-clicked'])
</script>

<template>
    <button @click="emit('navigation-button-clicked')" class="size-12 p-2 rounded-full"><img class="size-full" :src="icon"/>
    </button>
</template>