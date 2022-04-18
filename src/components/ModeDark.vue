<script setup>
import { ref, defineEmits } from 'vue'

const darkMode = ref(true)

const emit = defineEmits({
  darkMode: Boolean
})
const convertMode = () => {
  darkMode.value = !darkMode.value

  emit('darkMode', darkMode)
}
</script>

<template>
  <div>
    <button
      class="switch"
      :class="{
        'turn_on':darkMode,
        'turn_off':!darkMode}"
      @click="convertMode"
    >
      <i class="fa-solid fa-arrow-up"></i>
      {{darkMode}}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.turn_on {
  border: none;
}
</style>
