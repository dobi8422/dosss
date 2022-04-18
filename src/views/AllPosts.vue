<script setup>
import { ref } from 'vue'

const allPost = ref('')
allPost.value = [
  {
    name: 'chat-app',
    figure: 'https://picsum.photos/200/200',
    outline: '創建帳號，建聊天室，留言，線上人數',
    link: 'https://dobi8422.github.io/chat-app/'
  },
  {
    name: 'covid-19 infected map',
    figure: '/dosss/src/assets/penguin-icon.png',
    outline: '即時染疫統計，圖表/地圖顯示',
    link: ' https://dobi8422.github.io/covid-19-map-app/#/'
  }
]

// 分類.../分類也可firebase新增???有點難

</script>

<template>
  <div>
    <!-- Accordion -->
    all post
  </div>
</template>

<style lang="scss" scoped>

</style>
