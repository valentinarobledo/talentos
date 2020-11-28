<template>
	<div class="login">
		<div id="nav">
      <Nav/>
    </div>
		<div class="bg_login">
			<h3 class="title-login">Iniciar Sesión</h3>
			<div class="burbujas">
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
        <div class="burbuja"></div>
      </div>
		</div>
		<div class="container">
			<form action="#" @submit.prevent="login">
				<div class="form-group">
					<label class="label">Email</label>
					<b-form-input id="input-1"  type="email" v-model="email" placeholder="usuario@utp.edu.co"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Contraseña</label>
					<b-form-input id="input-2"  type="password" v-model="password"></b-form-input>
				</div>
				<button type="submit" class="btn btn-info">Iniciar</button>
			</form>
			<b-alert show variant="danger" v-if="error">{{ error }}}</b-alert>
		</div>
	</div>
</template>
<script>
import firebase from 'firebase'
import '@/firebase/init.js'
import Nav from '@/components/layout/Nav.vue'

export default {
  components:{
    Nav
  },
		data() {
			return {

				email:'',
				password:'',
				error:''
			}
		},
		name:'Login',
		methods: {
			login(){
				if(this.email && this.password){
                    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(user => {
                        this.$router.push({name: 'Dashboard'})
                        console.log(user);
                    }).catch(err => {
                        this.error = err.message
                    })
                    
                }
				else{
					this.error='Todos los campos son requeridos'
				}
			}
		}
}
</script>
<style lang="scss">
form{
	padding-top: 2em;
	padding-left:25%;
	padding-right:25%;
}
.bg_login{
  width:100%;
  height:50vh;
  background:linear-gradient(to right, #FA615B, #EDFF5D);
  position: relative;
  display: flex;
  align-items: center;
}
.title-login{
	text-align:center;
  font-family: 'Nerko One', cursive;
  font-size:60px;
	color:white;
	width: 100%;

	animation: movimiento 3s linear infinite;
}

</style>