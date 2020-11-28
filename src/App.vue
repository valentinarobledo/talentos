<template>
  <div id="app">
    <router-view/>
    <div class="foot">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/layout/Footer.vue'

export default {
  components:{
    Footer
  }
}
</script>

<style lang="scss">
  @import './scss/App.scss';
</style>