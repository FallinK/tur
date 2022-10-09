<template>
	<div class="other">
		<div class="other__btn" @click="toggleList">
			<slot tag="div"></slot>
		</div>
		<ul class="other__list" ref="otherList">
			<li class="other__item" v-for="item in otherList" :key="item">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'tur-other',
	props: {
		otherList: {
			type: Array,
			required: true
		}
	},
	methods: {
		toggleList() {
			this.$refs.otherList.classList.toggle('other__list_active');
		}
	}
}
</script>

<style lang="scss">
	.other {
		position: relative;
		&__btn {
			cursor: pointer;
			display: inline-block;
			background: #D9E8FF;
			border-radius: 11px;
			padding: 3px 10px;
			&:active {
				background: #6BA6FF;
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);	
				color: #fff;
			}
		}
		&__list {
			position: absolute;
			overflow: auto;
			max-height: 100px;
			top: 30px;
			background: #D9E8FF;
			padding: 3px 13px;
			border-radius: 11px;
			display: none;
			&_active{
				display: block;
			}
		}
		&__item {
			cursor: pointer;
			margin: 5px 0 0 0;
			font-size: 16px;
			color: #343434;
			border-radius: 11px;
			padding: 3px 13px;
			&:active {
				background: #6BA6FF;
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);	
				color: #fff;
			}
		}
}
</style>