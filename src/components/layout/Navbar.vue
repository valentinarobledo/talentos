<template>
	<div class="sidebar">
		<div>
    <b-button v-b-toggle.sidebar-no-header>Menú</b-button>
    <b-sidebar id="sidebar-no-header" 
		aria-labelledby="sidebar-no-header-title" 
		no-header shadow
		:backdrop-variant="variant"
		backdrop
		bg-variant="dark" >
      <template #default="{ hide }">
        <div class="p-3">
					<img src="../../assets/LOGO.png" alt="">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item>
								<router-link to="/student">
									<div class="item-sidebar">Estudiantes</div>
								</router-link>
							</b-nav-item>
              <b-nav-item>
								<router-link to="/class">
									<div class="item-sidebar">Clases</div>
								</router-link>
							</b-nav-item>
							<b-nav-item>
								<router-link to="/report">
									<div class="item-sidebar">Reportes</div>
								</router-link>
							</b-nav-item>							
              <b-nav-item>
								<router-link to="/dashboard">
									<div class="item-sidebar">Volver al inicio</div>
								</router-link>
							</b-nav-item>
            </b-nav>
          </nav>
        <b-button size="sm" @click="hide">Cerrar</b-button>   
				<b-nav-item>
								<router-link to="/">
									<button class="btn btn-danger">Salir</button>
								</router-link>
							</b-nav-item>      
        </div>
      </template>
    </b-sidebar>
  </div>
	</div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
.sidebar{
	width: 100%;
	background:#6c757d;
	height:8vh;
}
.item-sidebar{
	color:white;
	font-family: 'Nerko One', cursive;
	font-size:24px;
	&:hover{
		color:blanchedalmond;
	}
}
	
</style>