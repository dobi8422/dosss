<script setup>
import { ref, computed } from 'vue'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const popularPost = ref([])

const read = async () => {
  const querySnapshot = await getDocs(collection(db, 'pop-post'))
  querySnapshot.forEach((doc) => {
    popularPost.value.push(doc.data())
  })
}
read()

const now = ref(0)
const length = computed(() => popularPost.value.length - 1)
const minus = () => {
  if (now.value > 0) now.value--
  else now.value = length.value
}
const add = () => {
  if (now.value < length.value) now.value++
  else now.value = 0
}

const jump = (index) => {
  now.value = index
}
</script>

<template>
  <div class="carousel" v-if="popularPost[0]">
    <div>
      <button @click="minus"><i class="fa-solid fa-angle-left"></i></button>
      <a :href="popularPost[now].link" target="_blank">
        <img :src="popularPost[now].figure" alt="">
        <h5>{{ popularPost[now].name }}</h5>
      </a>
      <button @click="add"><i class="fa-solid fa-angle-right"></i></button>
    </div>
    <!-- 下方點點 -->
    <ul>
      <li v-for="(item, index) in popularPost" :key="item" @click="jump(index)">
        <i class="fa-solid fa-circle"></i>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-flow: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        height: 52vw;
        max-height: 360px;
        min-height: 240px;
        text-decoration: none;
      img {
        width: 65vw;
        max-width: 450px;
        min-width: 300px;
        height: 52vw;
        max-height: 360px;
        min-height: 240px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
      }
      h5 {
        position: relative;
        top: -5.5rem;
        padding: 1rem 0 .3rem 0;
        font-size: 1.4rem;
        background: linear-gradient(0deg, $bk 0%, rgba($bk, .75) 50%, rgba($bk, .55) 70%, rgba($bk, 0) 100%);
      }
    }
    button {
      border: none;
      border-radius: 50%;
      padding: 1rem;
      opacity: .5;
      i {
        font-size: 1.5rem;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}
ul {
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  li {
    list-style-type: none;
    margin: .5rem;
    font-size: .5rem;
    opacity: .5;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
