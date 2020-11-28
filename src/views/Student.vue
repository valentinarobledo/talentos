<template>
	<div class="student">
    <div id="navbar">
      <Navbar/>
    </div>
			<div class="banner-student">
				<div class="title-class">Gestión de Alumnos</div>
			</div>
			<div class="container">
				<table class="table">
						<thead class="thead-dark">
								<tr>
										<th>Nombre Completo</th>
										<th>Acudiente</th>
										<th>Contacto</th>
										<th>Correo</th>
										<th>Dirección</th>
										<th>Acciones</th>
								</tr>
						</thead>
						<tbody>
							<tr>
								<td>Estudiante 1</td>
								<td>Acudiente 1</td>
								<td>3135863061</td>
								<td>valenrobledo31@gmail.com</td>
								<td>Calle 21 # 21B - 08</td>
								<td>
									<button class="btn btn-primary">Editar</button>
									<button class="btn btn-danger">Eliminar</button>
								</td>
							</tr>
						</tbody>
				</table>	
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
.banner-student{
	background: url('../assets/4.png');
	height:60vh;
	position: relative;
	display: flex;
	align-items: center;	
	
}

	
</style>