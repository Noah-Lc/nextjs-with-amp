<template>
  <div>
    <navbar />
    <div class="container"> 
      <div>
        <h1 class="title">
        AMP Page
      </h1>
      <h2 class="subtitle">
        Welcome to the mobile web
      </h2>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: var(--black);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
