<template>
	<div class="button">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'tur-button'
}
</script>

<style lang="scss">
	.button {
		cursor: pointer;
		background: #FFD83C;
		border: 0.5px solid #CBA500;
		border-radius: 20px;
		color: #292929;
		text-align: center;
		padding: 16px 42px;
		max-width: 187px;
	}
</style>