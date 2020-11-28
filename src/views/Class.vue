<template>
	<div class="online">
    <div id="navbar">
      <Navbar/>
    </div>	
		<div class="class-banner">
			<div class="title-class">
				Nuestras clases Online
			</div>
		</div>			
		<div class="container">
				<table class="table">
						<thead class="thead-dark">
								<tr>
										<th>Clase</th>
										<th>Horario</th>
										<th>Link</th>
										<th>Acciones</th>
								</tr>
						</thead>
						<tbody>
							<tr>
								<td>Clase 1</td>
								<td>8:00 am</td>
								<td> <a href="https://meet.google.com/uak-xein-jac">https://meet.google.com/uak-xein-jac</a> </td>
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
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');

	.class-banner{
		background: url('../assets/5.png');
		background-repeat: no-repeat;
		height:500px;
		position: relative;
		display: flex;
		align-items: center;
	}
	.title-class{
		margin-left: auto;
		margin-right: auto;
		font-family: 'Nerko One', cursive;
		font-size:60px;


	animation: movimiento 5s linear infinite;		
	}
</style>