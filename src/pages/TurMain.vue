<template>
	<section class="cards">
		<div class="cards__container">
			<div class="cards__body">
				<tur-card v-for="card in cards" :key="card.id" :card="card"></tur-card>
			</div>
		</div>
	</section>
</template>

<script>
import TurCard from '@/components/TurCard.vue'
import { mapState } from 'vuex'
export default {
	components: {TurCard},
	computed: {
		...mapState ({
			cards: state => state.card.cards,
		}),
	}
}
</script>

<style lang="scss">
	.cards {
		margin: 86px 0 10px 0;
		&__container {
		}
		&__body {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
}
</style>