<template>
    <div class="reporte">
			<div id="navbar">
				<Navbar/>
			</div>
			<div class="banner-report">
				<div class="title-class">Reportes</div>
			</div>  
			<div class="container">
				<button class="btn btn-add" v-b-modal.modal-add>Agregar +</button>
				<table class="table">
						<thead class="thead-dark">
								<tr>
										<th>Nombre del reporte</th>
										<th>Grado</th>
										<th>Fecha</th>
										<th>Archivo</th>
										<th>Acciones</th>
								</tr>
						</thead>
						<tbody>
							<tr>
								<td>Fonoaudiología</td>
								<td>Grado 1</td>
								<td>Nov 15 2020</td>
								<td>archivo.pdf</td>
								<td>
									<button class="btn btn-primary">Editar</button>
									<button class="btn btn-danger">Eliminar</button>
								</td>
							</tr>
						</tbody>
				</table>				
			</div>  
		<b-modal id="modal-add" title="Subir nuevo reporte" hide-footer>
    <div class="container">
			<NewReport/>
		</div>
  </b-modal>			    
    </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import NewReport from '@/components/NewReport.vue'
export default {
  components: {
		Navbar,
		NewReport
  }
}
</script>

<style lang="scss">
	.banner-report{
		background: url('../assets/2.png');
		height: 60vh;
		display:flex;
		align-items: center;
		position:relative;
	}
</style>