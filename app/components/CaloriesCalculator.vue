<script setup lang="ts">
import type { Nutrition } from '~~/types/types'
import maleIcon from '~~/assets/icons/male.svg'
import femaleIcon from '~~/assets/icons/female.svg'


interface CaloriesCalculatorProps {
    currentValue: Nutrition
    maxValue: Nutrition
}
const props = defineProps<CaloriesCalculatorProps>()
    const overflows = ref({
  calories: false,
  proteins: false,
  fats: false,
  carbohydrates: false
})

const hasAnyOverflow = computed(() => 
  Object.values(overflows.value).some(v => v)
)
const emit = defineEmits(['gender-chosen'])
</script>

<template>
    <div class="flex flex-col bg-white rounded-2xl p-8 gap-4 lg:w-3/5 xl:w-2/5 ">
        <h3>Итого КБЖУ</h3>
        <ProgressBar @bar-overflow="overflows.calories=true" @no-overflow="overflows.calories=false" title="Калории" :value="currentValue.calories" :max="maxValue.calories" unit="Ккал"/>
        <ProgressBar @bar-overflow="overflows.proteins=true" @no-overflow="overflows.proteins=false" title="Белки" :value="currentValue.proteins" :max="maxValue.proteins" unit="г"/>
        <ProgressBar @bar-overflow="overflows.fats=true" @no-overflow="overflows.fats=false" title="Жиры" :value="currentValue.fats" :max="maxValue.fats" unit="г"/>
        <ProgressBar @bar-overflow="overflows.carbohydrates=true" @no-overflow="overflows.carbohydrates=false" title="Углеводы" :value="currentValue.carbohydrates" :max="maxValue.carbohydrates" unit="г"/>
        <div class="flex self-center">
        <button @click="emit('gender-chosen', 'male')"><img class="size-24" :src="maleIcon"/></button>
        <button @click="emit('gender-chosen', 'female')"><img class="size-24" :src="femaleIcon"/></button>
    </div>
        <div v-if="hasAnyOverflow" class="bg-red-100 px-2 py-4 rounded-2xl border-2 border-red-200 mt-4">
            <span>⚠️ Превышена дневная норма калорий или нутриентов</span>
        </div>
    </div>
</template>