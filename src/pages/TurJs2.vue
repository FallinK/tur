<template>
	<section class="js2">
		<div class="js2__container">
				<div class="js2__route">
				<div class="js2__text">Выберите направление</div>
				<tur-select :options="routes" v-model="selectedRoute" :disabled="submited"></tur-select>
			</div>
			<div class="js2__time" v-if="selectedRoute">
				<div class="js2__text">Выберите время отправления</div>
				<tur-select :options="getTime" v-model="selectedTime" :disabled="submited"></tur-select>
			</div>
			<div class="js2__time" v-if="selectedRoute === 'AB' && selectedTime">
				<div class="js2__text">Выберите время отправления обратно</div>
				<tur-select :options="getTimeBack" v-model="selectedTimeBack" :disabled="submited"></tur-select>
			</div>
			<div class="js2__tickets" v-if="allSelected">
				<div class="js2__text">Выберите количество билетов</div>
				<tur-input v-model="countTickets" :disabled="submited"></tur-input>
			</div>
			<div class="js2__button"><tur-button @click="submited = true" v-if="countTickets">Посчитать</tur-button></div>
			<div class="js2__results" v-if="countTickets && submited">
				<p>Вы выбрали {{countTickets}} билета по маршруту {{direction}} стоимостью {{Number(countTickets) * price}}.</p>
				<p>Время в пути: {{selectedRoute != 'AB' ? '50' : '1 час 40 минут'}}</p>
				<p>Теплоход отправляется в {{selectedTime}}, прибудет в {{getEndTime(selectedTime)}}</p>
				<p v-if="selectedTimeBack">Теплоход отправляется обратно в {{selectedTimeBack}}, прибудет в {{getEndTime(selectedTimeBack)}}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			routes: [
				{name: "из A в B", value: 'A'},
				{name: "из B в A", value: 'B'},
				{name: "из A в B и обратно", value: 'AB'},
			],
			selectedRoute: '',
			price: '',
			direction: '',
			timeA: [
				{name: "18:00(из A в B)", value: "18:00"},
				{name: "18:30(из A в B)", value: "18:30"},
				{name: "18:45(из A в B)", value: "18:45"},
				{name: "19:00(из A в B)", value: "19:00"},
				{name: "19:15(из A в B)", value: "19:15"},
				{name: "21:00(из A в B)", value: "21:00"}
			],
			timeB: [
				{name: "18:30(из B в A)", value: "18:30"},
				{name: "18:45(из B в A)", value: "18:45"},
				{name: "19:00(из B в A)", value: "19:00"},
				{name: "19:15(из B в A)", value: "19:15"},
				{name: "19:35(из B в A)", value: "19:35"},
				{name: "21:50(из B в A)", value: "21:50"},
				{name: "21:55(из B в A)", value: "21:55"}
			],
			selectedTime: '',
			selectedTimeBack: '',
			countTickets: '',
			submited: false,
		}
	},
	methods: {
		getEndTime(time) {
			let newTime = time.split(':');
			let date = new Date();
			date.setHours(Number(newTime[0]));
			date.setMinutes(Number(newTime[1]) + 50);
			return date.getHours() + ":" + date.getMinutes();
		}
	},
	computed: {
		getTime() {
			let newArray = [];
			switch (this.selectedRoute) {
				case 'A':
					newArray = this.timeA;
					break;
				case 'B':
					newArray = this.timeB;
					break;
				case 'AB':
					newArray = this.timeA;
					break;
			}
			return newArray;
		},
		getTimeBack() {
			let time = this.selectedTime.split(':');
			let date = new Date();
			date.setHours(Number(time[0]));
			date.setMinutes(Number(time[1]) + 50);
			return this.timeB.filter(item => {
				let localTime = item.value.split(':');
				let localDate = new Date();
				localDate.setHours(Number(localTime[0]));
				localDate.setMinutes(Number(localTime[1]));
				return localDate > date;
			});
		},
		allSelected(){
			let selected = false;
			if(this.selectedRoute != 'AB') {
				selected = this.selectedTime ? true : false;
			}
			else {
				selected = this.selectedTime && this.selectedTimeBack ? true : false;
			}
			return selected;
		}
	},
	watch: {
		selectedRoute(newVal) {
			this.price = newVal != 'AB' ? 700 : 1200;
			if(newVal === 'A') {
				this.directiopn = `из ${newVal} в B`;
			}
			if(newVal === 'B') {
				this.directiopn = `из ${newVal} в A`;
			}
			if(newVal === 'AB') {
				this.directiopn = `из A в B`;
			}
		}
	}
}
</script>

<style lang="scss">
	.js2 {
		margin: 80px 0 0 0;
		&__route {
			margin: 15px 0 0 0;
		}
		&__text {
			margin: 15px 0 0 0;
		}
		&__time {
			margin: 15px 0 0 0;
		}
		&__tickets {
			margin: 15px 0 0 0;
		}
		&__button {
			margin: 15px 0 0 0;
		}
		&__results {
			margin: 15px 0 0 0;
		}
}

</style>