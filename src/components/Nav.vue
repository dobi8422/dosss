<script setup>
// import Search from './Search.vue'
</script>

<template>
  <nav>
    <router-link class="home" to="/">
      <i class="fa-solid fa-fish"></i>Dosss
    </router-link>

    <router-link active-class="active-link" to="/works">
      Works
    </router-link>

    <router-link active-class="active-link" to="/posts">
      Posts
    </router-link>

    <!-- <Search /> -->
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  user-select: none;
  a {
    padding: .5rem;
    text-decoration: none;
    transition: background-color .5s, color .5s;
    border-radius: 10px;
    margin: 0 5px;
  }
  .active-link {
    background-color: $A-1;
    color: $bk;
  }
  .home {
    i {
      margin-right: 3px;
      transform: rotate(0);
      transition: transform .5s;
    }
    &:hover {
      i {
        transform: rotate(-25deg);
      }
    }
  }
  .search {
    position: absolute;
    right: 0;
    input {
      font-size: 1rem;
    }
  }
}
</style>
