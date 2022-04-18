<script setup>
import { ref, onMounted } from 'vue'
const top = ref(0)
const isTop = ref(false)

const handleScroll = () => {
  top.value = document.documentElement.scrollTop ||
    document.body.scrollTop ||
    window.pageYOffset
  isTop.value = top.value >= 46
}

function debounce (func, delay = 100) {
  let timer = null
  return () => {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

onMounted(() => {
  window.addEventListener('scroll', debounce(handleScroll))
})

const goTop = () => {
  // document.documentElement.scrollTop = 0
  scrollTo({ top: 0, behavior: 'smooth' }) // 平滑效果
}
</script>

<template>
  <div>
    <button class="goTop" :class="{'vanish':isTop}" @click="goTop">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.goTop {
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 50%;
  border-radius: 50%;
  padding: 1.2rem .8rem .1rem .8rem;
  border: 2px solid $text_1;
  transform: translate(-50%, -100%);
  transition: transform .5s;
}
.vanish {
  transform: translate(-50%, -50%);
  transition: transform .5s;
}
</style>
