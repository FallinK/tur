<template>
	<input type="tel" :value="modelValue" @input="updateValue">
</template>

<script>
export default {
	name: 'tur-input',
	props: {
		modelValue: {
			type: String,
			default: '1'
		}
	},
	methods: {
		updateValue(event) {
			this.$emit('update:modelValue', event.target.value);
		}
	}
}
</script>

<style lang="scss">
	input {
		border: 2px solid teal;
	}
</style>