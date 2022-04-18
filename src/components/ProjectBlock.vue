<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  link: {
    type: String
  },
  figure: {
    type: String
  },
  name: {
    type: String
  },
  outline: {
    type: String
  }
})
</script>

<template>
  <a :href="props.link" target="_blank">
    <img :src="props.figure" alt="">
    <h5>{{ props.name }}</h5>
    <p v-if="props.outline">{{ props.outline }}</p>
  </a>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  width: 250px;
  padding-bottom: 1rem;
  margin: 1rem;
  border-radius: 15px;
  img {
    width: 250px;
    height: 200px;
    border-radius: 15px;
    object-fit: cover;
  }
  h5 {
    font-size: 1.3rem;
    margin: 0;
    margin-top: 1rem;
  }
  p {
    padding: .5rem;
  }
}
@media screen and (max-width: 576px) {
  a {
    // padding: 1rem;
    width: 80%;
    min-width: 300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    img {
      width: 75vw;
      min-width: 300px;
      height: 60vw;
      min-height: 240px;
      // max-height: 300px;
    }
  }
}
</style>
