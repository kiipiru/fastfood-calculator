<script setup lang="ts">
  import type { Nutrition } from "~~/types/types"
  
  interface NutritionComparisonBarProps {
    values: Nutrition[]
    cols: number
  }
  
  const props = defineProps<NutritionComparisonBarProps>()
  
  const nutrientKeys: (keyof Nutrition)[] = [
    "calories",
    "proteins",
    "fats",
    "carbohydrates",
  ]
  
  const gridTemplateColumns = computed(() =>
    `minmax(160px, 1.2fr) repeat(${props.cols}, minmax(140px, 1fr))`
  )
  
  const labels: Record<keyof Nutrition, string> = {
    calories: "ккал",
    proteins: "белки",
    fats: "жиры",
    carbohydrates: "углеводы",
  }
  
  const units: Record<keyof Nutrition, string> = {
    calories: "ккал",
    proteins: "г",
    fats: "г",
    carbohydrates: "г",
  }
  
  const barColors: Record<keyof Nutrition, string> = {
    calories: "bg-red-400",
    proteins: "bg-blue-400",
    fats: "bg-yellow-400",
    carbohydrates: "bg-purple-400",
  }
  
  const extremes = computed(() => {
    const result = {} as Record<
      keyof Nutrition,
      { max: number; min: number }
    >
  
    nutrientKeys.forEach((key) => {
      const values = props.values.map(v => v[key])
      result[key] = {
        max: Math.max(...values),
        min: Math.min(...values),
      }
    })
  
    return result
  })
  
  const percents = computed(() => {
    return props.values.map(value => {
      const row = {} as Record<keyof Nutrition, number>
  
      nutrientKeys.forEach(key => {
        const max = extremes.value[key].max
        row[key] = max ? (value[key] / max) * 100 : 0
      })
  
      return row
    })
  })

  function isBest(value: Nutrition, key: keyof Nutrition) {
    if (key === "calories" || key === "fats") {
      return value[key] === extremes.value[key].min
    }
    return value[key] === extremes.value[key].max
  }
  </script>

<template>
  <div class="grid gap-x-4 gap-y-4 mt-3 p-4 overflow-x-auto" :style="{ gridTemplateColumns, gridTemplateRows: `repeat(${nutrientKeys.length}, auto)` }">
    <template v-for="key in nutrientKeys" :key="key">
      <div class="flex flex-col justify-center">
        <span class="text-sm font-medium">
          {{ labels[key] }}
        </span>
        <span class="text-xs text-gray-500 block">
          {{ units[key] }}
        </span>
      </div>
      <div
        v-for="(value, index) in values"
        :key="`${key}-${index}`"
        class="flex flex-col gap-2 items-center justify-center"
      >
        <span
          class="text-xs flex items-center gap-1"
          :class="isBest(value, key) && 'text-green-600 font-semibold'"
        >
          {{ value[key] }}
          <svg
            v-if="isBest(value, key)"
            class="size-4 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>

        <div class="bg-gray-200 w-full rounded-full h-2 overflow-hidden">
          <div
            class="h-full rounded-full transition-all"
            :class="barColors[key]"
            :style="{ width: (percents?.[index]?.[key] ?? 0) + '%' }"
          ></div>
        </div>
      </div>
    </template>
  </div>
</template>
