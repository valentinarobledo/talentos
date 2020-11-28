<template>
    <div class="add">
			<form action="#">
				<div class="form-group">
					<label class="label">Nombre Estudiante</label>
					<b-form-input id="input-1"  type="name" v-model="student" placeholder="Nombre del estudiante"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Nombre Acudiente</label>
					<b-form-input id="input-1"  type="name" v-model="acudiente" placeholder="Nombre del acudiente"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Teléfono</label>
					<b-form-input id="input-1"  type="number" v-model="phone" placeholder="Número de contacto"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Correo</label>
					<b-form-input id="input-2"  type="email" v-model="email"></b-form-input>
				</div>
				<div class="form-group">
					<label class="label">Dirección</label>
					<b-form-input id="input-1"  type="name" v-model="address" placeholder="Dirección de residencia"></b-form-input>
				</div>
				<button type="submit" class="btn btn-info">Guardar</button>
			</form>
    </div>
</template>