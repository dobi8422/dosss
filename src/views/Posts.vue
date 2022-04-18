<script setup>
import { ref } from 'vue'
import ProjectBlock from '../components/ProjectBlock.vue'
import Carousel from '../components/Carousel.vue'

import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

// write
// import { addDoc, collection } from 'firebase/firestore'
// const test = async () => {
//   try {
//     const docRef = await addDoc(collection(db, 'posts'), {
//       name: '.....',
//       figure: '......',
//       link: '......',
//       outline: '......',
//       date: '20220415'
//     })
//     console.log('Document written with ID: ', docRef.id)
//   } catch (e) {
//     console.error('Error adding document: ', e)
//   }
// }

const RecentPost = ref([])
// {
//   name: 'chat-app',
//   figure: 'https://picsum.photos/200/200',
//   link: 'https://dobi8422.github.io/chat-app/'
// },
// {
//   name: 'covid-19 infected map',
//   figure: '/dosss/src/assets/penguin-icon.png',
//   link: ' https://dobi8422.github.io/covid-19-map-app/#/'
// }
const read = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'))
  querySnapshot.forEach((doc) => {
    RecentPost.value.push(doc.data())
  })
}
read()
</script>

<template>
  <div>
    <h2>Popular Posts</h2>
    <Carousel />

    <h2 v-if="RecentPost[0]">Recent Posts</h2>
    <div class="block">
      <ProjectBlock
        :link="item.link"
        :figure="item.figure"
        :name="item.name"
        v-for="item in RecentPost" :key="item"
      />
    </div>

    <router-link class="allPosts" to="/all_posts">
      All Posts...
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  width: fit-content;
  padding: .2rem .5rem;
  border-bottom: 3px solid $bk_2;
}
.block {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 600px;
}
@media screen and (max-width: 576px) {
  h2 {
    align-self: center;
    width: 40%;
  }
  .block {
    width: 95vw;
    min-width: 300px;
  }
}
// Posts.vue & Works.vue
.allPosts {
  color: $A_1;
  border-radius: 15px;
  text-decoration: none;
}
</style>
