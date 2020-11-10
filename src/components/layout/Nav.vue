<template>
	<div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
			<router-link class="navbar-item" to="/">
				<h3 class="title is 3">Talentos</h3>
			</router-link>

        <a role="button" class="navbar-burger burger" v-bind:class="{'is-active' : isOpen}" @click.prevent="toggle" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active' : isOpen}">
        <div class="navbar-start">
					<router-link class="navbar-item" to="/">Home</router-link>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <router-link class="button is-primary" to="/register">
                <strong>Registrarse</strong>
            </router-link>
            <router-link class="button is-light" to="/login">
                Ingresar
            </router-link>
            </div>
        </div>
        </div>
    </div>
    </nav>
	</div>
</template>

<script>
export default {
	data (){
		return{
			isOpen:false
		}
	},
	methods: {
		toggle(){
			const status = !this.isOpen
			this.isOpen = status
		}
	}
}
</script>