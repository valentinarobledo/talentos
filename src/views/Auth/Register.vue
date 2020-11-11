<template>
	<div class="container" style="margin-top:50px;">
			<div class="columns">
					<div class="columns is-6 is-offset-3">
						<h3 class="title is-3">Crear una cuenta</h3>
						<form action="#" @submit.prevent="register">
							<div class="field">
								<label class="label">Name</label>
								<div class="control">
									<input class="input" type="text" placeholder="e.g Alex Smith" v-model="name">
								</div>
							</div>

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
							<button type="submit" class="button is-primary">Registrar</button>
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
				name:'',
				email:'',
				password:'',
				error:''
			}
		},
		name:'Register',
		methods: {
			register(){
				if(this.name && this.email && this.password){
					firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
						.then(user=>{
							this.name=''
							this.email=''
							this.password=''
							console.log(user)

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