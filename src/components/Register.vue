<template>
	<form @submit.prevent="submit">
		<form-group :validator="$v.name" label="Nama Lengkap">
			<input type="text" v-model="name" class="form-control" :class="{'is-invalid': $v.name.$error}">
		</form-group>
		<form-group :validator="$v.email" label="Email">
			<input type="email" v-model="email" class="form-control" :class="{'is-invalid': $v.email.$error}">
		</form-group>
		<form-group :validator="$v.phone" label="No Telp">
			<input type="text" v-model="phone" class="form-control" :class="{'is-invalid': $v.phone.$error}">
		</form-group>
		<form-group :validator="$v.password" label="Password">
			<input type="password" v-model="password" class="form-control" :class="{'is-invalid': $v.password.$error}">
		</form-group>
		<div class="form-group">
			<button class="btn btn-primary btn-sm">Daftar</button>
		</div>
	</form>
</template>
<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { notGmail, isEmailAvailable, notPhone } from '../validator'

export default {
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			password: ''
		}
	},
	validations: {
		name: {
			required,
			minLength: minLength(4),
			maxLength: maxLength(50)
		},
		email: {
			required,
			email,
			notGmail,
			maxLength: maxLength(50)
		},
		phone: {
			required, notPhone
		},
		password: {
			required,
			minLength: minLength(6)
		}
	},
	methods: {
		submit() {
			this.$v.$touch();
			if (this.$v.$error) return;
			alert('Form submitted')
		}
	}
}
</script>

