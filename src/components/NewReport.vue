<template>
    <div class="new">
        <form action="#">
				<div class="form-group">
					<label class="label">Reporte</label>
					<b-form-input id="input-1"  type="name" v-model="reporte" placeholder="Nombre del reporte"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Grado</label>
					<b-form-input id="input-1"  type="name" v-model="grado" placeholder="Seleccione un grado"></b-form-input>
				</div>
				<div class="form-group">
					<label for="example-datepicker">Fecha</label>
					<b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>
				</div>
				<button class="btn btn-warning">Subir archivo</button>
				<button type="submit" class="btn btn-info">Guardar</button>
			</form>
    </div>
</template>