<template>
	<div class="student">
    <div id="navbar">
      <Navbar/>
    </div>
			<div class="banner-student">
				<div class="title-class">Gestión de Alumnos</div>
			</div>
			<div class="container">
				<button v-b-modal.modal-add class="btn btn-add">Agregar +</button>
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
							<tr>
								<td>Estudiante 2</td>
								<td>Acudiente 2</td>
								<td>3125733059</td>
								<td>usuario2@gmail.com</td>
								<td>Calle # barrio</td>
								<td>
									<button class="btn btn-primary">Editar</button>
									<button class="btn btn-danger">Eliminar</button>
								</td>
							</tr>							
						</tbody>
				</table>	
			</div>
  <b-modal id="modal-add" title="Agregar Estudiante" hide-footer>
    <div class="container">
			<AddStudent/>
		</div>
  </b-modal>					
	</div>
</template>
<script>
import Navbar from '@/components/layout/Navbar.vue'
import AddStudent from '@/components/AddStudent.vue'

export default {
  components: {
		Navbar,
		AddStudent
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
.banner-student{
	background: url('../assets/4.png');
	height:60vh;
	position: relative;
	display: flex;
	align-items: center;	
	
}
.btn-add{
	background:#ff9600 !important;
	color:white  !important;
	border-radius:30px !important;
	position:relative;
	float:right;
	margin-bottom:20px;
	font-family: 'Nerko One', cursive;
	font-size:24px !important;
}

	
</style>