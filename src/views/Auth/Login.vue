<template>
	<div class="container" style="margin-top:50px;">
			<div class="columns">
					<div class="columns is-6 is-offset-3">
						<h3 class="title is-3">Iniciar Sesión</h3>
						<form action="#" @submit.prevent="login">

							<div class="field">
								<label class="label">Email</label>
								<div class="control">
									<input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
								</div>
							</div>
								<div class="field">
								<label class="label">Contraseña</label>
								<div class="control">
									<input class="input" type="password" v-model="password">
								</div>
							</div>
							<button type="submit" class="button is-primary">Iniciar</button>
						</form>
						<div class="notification is-danger" v-if="error">
							{{ error }}
						</div>
					</div>
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