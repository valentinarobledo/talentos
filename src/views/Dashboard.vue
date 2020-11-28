<template>
	<div class="dashborad">
    <div id="navbar">
      <Navbar/>
    </div>
      <div class="center">
        <div class="title-dash">Bienvenidos a Talentos</div>
      </div>
	</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.center{
  height:68vh;
  background-repeat: no-repeat;
  background: url('../assets/3.png');
  align-items: center;
  display: flex;
  position: relative;
}
.title-dash{
  margin-left:auto;
  margin-right: auto;
  text-align:center;
  font-family: 'Nerko One', cursive;
  font-size:60px;
  color:#59636d;


	animation: movimiento 5s linear infinite;	
}
</style>