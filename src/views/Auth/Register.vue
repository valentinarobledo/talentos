<template>
	<div class="container" style="margin-top:50px;">
		<div>
			<div>
				<h3 class="title">Crear una cuenta</h3>
				<form action="#" @submit.prevent="register">
					<div class="form-group">
						<label class="label">Nombre Completo</label>
						<b-form-input id="input-1"  type="text" v-model="name" placeholder="Ej: Valentina Robledo"></b-form-input>
					</div>
					<div class="form-group">
								<label class="label">Email</label>
								<b-form-input id="input-2"  type="email" v-model="email" placeholder="usuario@utp.edu.co"></b-form-input>
					</div>
					<div class="form-group">
								<label class="label">Contraseña</label>
								<b-form-input id="input-1"  type="password" v-model="password"></b-form-input>
					</div>
					<button type="submit" class="btn btn-primary">Registrar</button>
				</form>
				<b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
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