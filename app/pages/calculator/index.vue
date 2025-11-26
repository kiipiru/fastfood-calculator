<script setup lang="ts">
import calculatorIcon from '~~/assets/icons/calculator.svg'
</script>

<template>
  <main class="max-w-xl mx-auto my-40">
    <div class="flex flex-col items-center gap-4"><img class="w-[100px]" :src="calculatorIcon" />
        <h2>Пока пусто 😞</h2>
        <p>Добавьте блюда из каталога, чтобы рассчитать калории</p>
        <Button color="orange" text="Перейти в каталог" @button-pressed="navigateTo('/menu')" ></Button>
    </div>
  </main>
</template>
