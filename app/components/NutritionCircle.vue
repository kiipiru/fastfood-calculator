<script setup lang="ts">
interface CircleProps {
  title: string;
  value: number;
  max: number;
  type: "ккал" | "г";
  color: "orange" | "blue" | "yellow" | "green";
}
const props = defineProps<CircleProps>();
const percentage = Math.min((props.value / props.max) * 100, 100);
const circumference = 2 * Math.PI * 45;
const strokeDashoffset = circumference - (percentage / 100) * circumference;

const colorClasses = computed(() => {
  const circleClasses: Record<CircleProps["color"], string> = {
    orange: "stroke-orange-500",
    blue: "stroke-blue-500",
    yellow: "stroke-yellow-500",
    green: "stroke-green-500",
  };
  const backgroundClasses: Record<CircleProps["color"], string> = {
    orange: "stroke-orange-100",
    blue: "stroke-blue-100",
    yellow: "stroke-yellow-100",
    green: "stroke-green-100",
  };
  return {
    circleClass: circleClasses[props.color],
    backgroundClass: backgroundClasses[props.color],
  };
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative w-24 h-24">
      <svg class="w-24 h-24 -rotate-90">
        <circle
          cx="48"
          cy="48"
          r="45"
          class="fill-none"
          :class="colorClasses.backgroundClass"
          stroke-width="6"
        />
        <circle
          cx="48"
          cy="48"
          r="45"
          class="fill-none transition-all duration-500"
          :class="colorClasses.circleClass"
          stroke-width="6"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="strokeDashoffset"
          stroke-linecap="round"
        />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="text-sm">{{ Math.round(percentage) }}%</div>
        <div class="text-xs text-gray-600">{{ value }} {{ type }}</div>
      </div>
    </div>
    <div class="mt-2 text-sm text-center text-gray-700">{{ title }}</div>
    <div class="text-xs text-gray-500">из {{ max }} {{ type }}</div>
  </div>
</template>
