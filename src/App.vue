<script setup>
import Nav from './components/Nav.vue'
import Gotop from './components/Gotop.vue'
import Footer from './components/Footer.vue'
// import ModeDark from './components/ModeDark.vue'

// const darkMode = Mode => {
//   console.log(Mode.value)
// }
</script>

<template>
  <div>
    <Nav />
    <Gotop />
    <!-- <ModeDark @darkMode=darkMode /> -->
    <router-view id="content"/>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  color: $text;
  background-color: $bk;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: center;
  letter-spacing: .2px;
}
body {
  margin: 0;
  p {
    margin: 0;
  }
}
#content {
  min-height: calc(100vh - 97px);
  padding: 0 4rem 4rem 4rem;
  max-width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
