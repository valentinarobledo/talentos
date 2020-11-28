<template>
    <div class="add">
			<form action="#">
				<div class="form-group">
					<label class="label">Nombre de la clase</label>
					<b-form-input id="input-1"  type="name" v-model="clss" placeholder="Nueba clase"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Establecer horario</label>
					<b-form-input id="input-1"  type="name" v-model="hora" placeholder="Hora"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Link</label>
					<b-form-input id="input-1"  type="number" v-model="link" placeholder="link"></b-form-input>
				</div>
				<button type="submit" class="btn btn-info">Guardar</button>
			</form>
    </div>
</template>