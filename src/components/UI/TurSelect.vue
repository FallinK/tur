<template>
	<select v-model="selectedOption" @change="changeOption">
		<option value="" disabled>Выберите из списка</option>
		<option
			v-for="option in options"
			:key="option.value"
			:value="option.value"
		>
			{{ option.name }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'tur-select',
	props: {
		modelValue: {
			type: String,
		},
		options: {
			type: Array,
			default: () => [],
		}
	},
	data() {
		return {
			selectedOption: ''
		}
	},
	methods: {
		changeOption(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	},
}
</script>

<style scoped>
	select {
		border: 2px solid teal;
	}
</style>