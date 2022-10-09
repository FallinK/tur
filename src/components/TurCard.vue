<template>
	<div class="card">
		<div class="card__mark" v-if="card.marker">{{card.marker}}</div>
		<div class="card__image">
			<img :src="require(`@/assets/img/card-preview/${card.img}`)" :alt="card.img">
		</div>
		<div class="card__body">
			<div class="card__duration duration">
				<img class="duration__img" src="@/assets/img/icons/clock.svg" alt="Clock">
				<div class="duration__text">
					{{card.duration}} часа
				</div>
			</div>
			<div class="card__title">
				<h2>{{card.title}}</h2>
			</div>
			<ul class="card__list list">
				<li class="list__option option" v-for="option in card.options" :key="option">
					<div class="option__text">
						{{option}}
					</div>
				</li>
				<li class="list__option option">
					<div class="option__text">Ближайший рейс сегодня</div>
					<div class="option__schedule" ref="optionSchedule">
						<span class="option__item" v-for="schedule in priSchedule" :key="schedule">
							{{schedule}}
						</span>
						<tur-other v-if="secSchedule.length > 0" :otherList="secSchedule">ещё...</tur-other>
					</div>
				</li>
			</ul>
			<div class="card__footer">
				<div class="card__price price">
					<div class="price__text">{{card.price}} ₽</div>
					<div class="card__subtext" v-if="card.pricePier">{{card.pricePier}} на причале</div>
				</div>
				<tur-button>Подробнее</tur-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			sizeSchedule: 0
		}
	},
	methods: {
		generateArray(startIndex, endIndex, array) {
			let newArray = [];
			for (let i = startIndex; i <= endIndex; i++) {
				newArray.push(array[i]);
			}
			return newArray;
		}
	},
	mounted() {
		this.sizeSchedule = Math.floor(this.$refs.optionSchedule.offsetWidth / 72);
	},
	computed: {
		priSchedule() {
			return this.generateArray(0, this.sizeSchedule - 2, this.card.optionSchedule).filter(element => element);
		},
		secSchedule() {
			return this.generateArray(this.sizeSchedule - 1, this.card.optionSchedule.length - 1, this.card.optionSchedule);
		}
	}
}
</script>

<style lang="scss">
.card {
	position: relative;
	border: 0.3px solid #828282;
	border-radius: 16px;
	overflow: hidden;
		&__mark {
			position: absolute;
			top: 41px;
			left: -1px;
			background: #FED74B;
			padding: 8px 17px;
			font-weight: 600;
			font-size: 12px;
			line-height: 1.67;
			color: #3E3E3E;
		}
		&__image {
			& img {
				width: 100%;
			}
		}
		&__body {
			flex: 56%;
			padding: 0 12px;
		}
		&__duration {
			margin: 14px 0 0 0;
		}
		&__title {
			margin: 10px 0 0 0;
			& h2 {
				font-weight: 600;
				font-size: 14px;
				line-height: 1.57;
				color: #404040;
			}
		}
		&__list {
			margin: 20px 0 0 0;
		}
		&__schedule {
			
		}
		&__footer {
			margin: 35px 0 19px 0;
			display: flex;
			align-items: center;
			gap: 28px;
			& .button {
				padding: 15px;
			}
		}
		&__price {
		}
		&__subtext {
			font-size: 10px;
			color: #000000;
		}
}
.list {
		&__option {
		}
}
.option {
	position: relative;
		padding: 0 0 0 37px;
		&:not(:first-child) {
			margin: 9px 0 0 0;
		}
		&:has(.option__schedule) {
			display: flex;
			flex-direction: column;
			gap: 7px;
		}
		&:before {
			content: '';
			left: 11px;
			width: 16px;
			height: 16px;
			position: absolute;
			background: url(@/assets/img/icons/check-mark.svg);
		}
		&__text {
			font-size: 14px;
			color: #4B4B4B;
		}
		&__schedule {
			display: flex;
			gap: 4px;
		}
		&__item {
			cursor: pointer;
			display: inline-block;
			background: #D9E8FF;
			border-radius: 11px;
			padding: 3px 13px;
			&:active {
				background: #6BA6FF;
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
				color: #fff;
			}
		}
}
.price {
		&__text {
			font-size: 30px;
			color: #000000;
		}
}
.duration {
	display: flex;
	align-items: center;
	gap: 9px;
		&__img {
			width: 16px;
			height: 16px;
		}
		&__text {
			font-size: 12px;
			color: #9E9E9E;
		}
}
@media (min-width: 767.98px) {
	.card {
		display: flex;
		&__image {
			flex: 44%;
			& img {
				object-fit: cover;
				height: 100%;
			}
		}
	}
}
</style>