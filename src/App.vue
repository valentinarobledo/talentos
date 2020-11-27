<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
    <router-view/>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/layout/Nav.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components:{
    Nav,
    Footer
  }
}
</script>

<style lang="scss">
  @import './scss/App.scss';
</style>