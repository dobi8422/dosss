<script setup>
import { ref } from 'vue'
import ProjectBlock from '../components/ProjectBlock.vue'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const recentPortfolio = ref([])
const cooperationPortfolio = ref([])
const pastPortfolio = ref([])

// 更新 前4個放到recent，其他放到past
const read = async () => {
  const workQuerySnapshot = await getDocs(collection(db, 'works'))
  workQuerySnapshot.forEach((doc) => {
    pastPortfolio.value.push(doc.data())
  })
  const coQuerySnapshot = await getDocs(collection(db, 'co-work'))
  coQuerySnapshot.forEach((doc) => {
    cooperationPortfolio.value.push(doc.data())
  })
}
read()
</script>

<template>
  <div>
    <h2 v-if="recentPortfolio[0]">Recent</h2>
    <div class="block">
      <ProjectBlock
        :link="item.link"
        :figure="item.figure"
        :name="item.name"
        :outline="item.outline"
        v-for="item in recentPortfolio" :key="item"
      />
    </div>

    <h2 v-if="cooperationPortfolio[0]">Cooperation</h2>
    <div class="block">
      <ProjectBlock
        :link="item.link"
        :figure="item.figure"
        :name="item.name"
        :outline="item.outline"
        v-for="item in cooperationPortfolio" :key="item"
      />
    </div>

    <h2 v-if="pastPortfolio[0]">Past</h2>
    <div class="block">
      <ProjectBlock
        :link="item.link"
        :figure="item.figure"
        :name="item.name"
        :outline="item.outline"
        v-for="item in pastPortfolio" :key="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  width: fit-content;
  padding: .2rem .5rem;
  border-bottom: 3px solid $bk_2;
  align-self: flex-start;
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
</style>
