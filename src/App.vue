<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/layout/Nav.vue'
export default {
  components:{
    Nav
  }
}
</script>

<style lang="scss">
  @import './scss/App.scss';
</style>