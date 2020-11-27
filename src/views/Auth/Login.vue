<template>
	<div class="container">
					<div class="login">
						<h3 class="title">Iniciar Sesión</h3>
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
export default {
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
</style>