<script setup lang="ts">
interface ProgressBarProps {
  title: string;
  value: number;
  max: number;
  unit: string;
}
const props = defineProps<ProgressBarProps>();
const progressBarPercent = computed(() => {
  return (props.value / props.max) * 100;
});
const colorClasses = computed(() => {
  if (progressBarPercent.value <= 70) {
    return { text: "text-green-500", bar: "bg-green-400" };
  }
  if (progressBarPercent.value >= 70 && progressBarPercent.value <= 100) {
    return { text: "text-yellow-500", bar: "bg-yellow-400" };
  } else {
    return { text: "text-red-400", bar: "bg-red-400" };
  }
});
const emit = defineEmits(["bar-overflow", "no-overflow"]);
watchEffect(() => {
  if (progressBarPercent.value >= 100) {
    emit("bar-overflow");
  } else emit("no-overflow");
});
</script>

<template>
  <div class="flex justify-between">
    <span>{{ title }}</span>
    <span :class="colorClasses.text" class="font-semibold"
      >{{ value }} / {{ max }} {{ unit }}</span
    >
  </div>
  <div class="bg-gray-200 w-full rounded-full h-2 overflow-hidden">
    <div
      class="h-full rounded-xl"
      :class="colorClasses.bar"
      :style="{ width: progressBarPercent + '%' }"
    ></div>
  </div>
</template>
