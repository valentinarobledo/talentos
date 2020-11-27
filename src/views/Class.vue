<template>
	<div class="online">
		<div class="container">
				<div class="class-banner">
					<div class="title">
						<h3>Nuestras clases Online</h3>
					</div>
				</div>
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

<style lang="scss">
	.class-banner{
		background: url('../assets/5.png');
		background-repeat: no-repeat;
		height:500px;
	}
</style>