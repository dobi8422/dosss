<script setup>
import ThreeAnimation from '../components/ThreeAnimation.vue'
</script>

<template>
  <div>
    <ThreeAnimation />

    <div class="intro">
      <div>
        <h1>Dosss</h1>
        <p>
          Front-end developer.<br>
          The goal is to become a full stack developer and a freelancer.
        </p>
      </div>
      <img src="../assets/penguin-icon.png" alt="">
    </div>

    <div class="job">
      <h2>Job</h2>
      <p>
        Currently a front-end engineer, working in a biotechnology company.
      </p>
      <router-link class="button" to="/works">
        My portfolio >
      </router-link>
    </div>

    <div class="tech">
      <h2>Tech</h2>
      <p>
        Vue / Vite / React / D3 / Bootstrap / Tailwind / Firebase / Flutter
      </p>
    </div>

    <div class="bio">
      <h2>Bio</h2>
      <p><span>1999</span>Born in Taichung, Taiwan.</p>
      <p><span>2021</span>Completed the bachelor program in the Chemical engineering of Feng Chia University.</p>
      <p><span>2021</span>Start learning front-end.</p>
      <p><span>2022</span>Working at De Novo.</p>
    </div>

    <div class="other">
      <h2>Other</h2>
      <a href="https://github.com/dobi8422" target="_blank">
        <i class="fa-brands fa-github"></i>
        @dobi8422
      </a>
      <a class="ig_icon" href="" target="_blank">
        <i class="fa-brands fa-instagram"></i>
        @dosss...
      </a>
      <a href="" target="_blank">
        <i class="fa-brands fa-twitter"></i>
        @dosss...
      </a>
      <a href="mailto:dobi6658@gmail.com" aria-label="Email" target="_blank">
        <i class="fa-solid fa-envelope"></i>
        @dobi6658
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro, .job, .tech, .bio, .other {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  p {
    text-align: start;
    display: flex;
    padding-bottom: 1rem;
    font-size: 1.05rem;
  }
  .button {
    text-decoration: none;
    align-self: center;
    border: none;
    border-radius: 10px;
    background: $A_1;
    padding: .8rem;
    font-size: 1.05rem;
    color: $bk;
    transition: color .2s;
    &:hover {
      color: $text;
    }
  }
}

.intro {
  flex-flow: row;
  div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
  img {
    width: 100px;
    height: 100px;
    margin: 2rem 0;
    border-radius: 50%;
  }
}

.bio {
  p {
    line-height: 1.5rem;
    span {
      margin-right: 1rem;
    }
  }
}

.other {
  a {
    width: 100%;
    text-align: start;
    text-decoration: none;
    margin: .4rem 0;
    padding: .8rem 0 .8rem .8rem;
    font-size: 1.1rem;
    border-radius: 10px;
    color: $A-1;
    // transition: background .5s;
    i {
      margin-right: 4px;
      color: $A-1;
      font-size: 1.4rem;
      // transition: background .5s;
    }
    &:hover {
      background: rgba($A-1, .25);
      i {
        background: rgba($A-1, 0);
      }
    }
  }
  .ig_icon {
    i {
      padding: 1px;
    }
  }
}

@media screen and (max-width: 576px) {
  .intro {
    flex-flow: column;
    h1 {
      margin-bottom: 0;
    }
    img {
      align-self: center;
      margin: 0;
    }
  }
}
</style>
