<template>
	<section class="js1">
		<div class="js1__container">
			<div class="js1__quest">
				<h2>Вопрос</h2>
				<div>Некоторые события нужно продавать с дополнительными типами билетов - льготный и групповой, у которых будут свои цены и название. Имеется информация, что вероятно, будут другие типы билетов, которые нужно будет добавить. Нужно уметь сохранять при заказе 2 дополнительных типа билета, льготный и групповой в бд. Задача - Показать конечный вид таблицы с добавленными типами билетов. Объяснить свое решение.</div>
			</div>
			<div class="js1__answer">
				<h2>Ответ</h2>
				<div>
					Достаточно будет добавить поле type_ticket. Где будет указываться тип билета: preferential или group. Preferential - льготный, group - групповой
				</div>
				<div class="js1__table">
					<table class="table">
						<thead>
							<tr class="table__header">
								<td>id</td>
								<td>event_id</td>
								<td>event_date</td>
								<td>type_ticket</td>
								<td>ticket_adult_price</td>
								<td>ticket_adult_quantity</td>
								<td>ticket_kid_price</td>
								<td>ticket_kid_quantity</td>
								<td>barcode</td>
								<td>user_id</td>
								<td>equal_price</td>
								<td>created</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>003</td>
								<td>2021-08-21 13:00:00</td>
								<td></td>
								<td>700</td>
								<td>1</td>
								<td>450</td>
								<td>0</td>
								<td>11111111</td>
								<td>00451</td>
								<td>700</td>
								<td>2021-01-11 13:22:09</td>
							</tr>
							<tr>
								<td>2</td>
								<td>006</td>
								<td>2021-07-29 18:00:00</td>
								<td>preferential</td>
								<td>1000</td>
								<td>0</td>
								<td>800</td>
								<td>2</td>
								<td>22222222</td>
								<td>00364</td>
								<td>1600</td>
								<td>2021-01-12 16:62:08</td>
							</tr>
							<tr>
								<td>3</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>group</td>
								<td>700</td>
								<td>4</td>
								<td>450</td>
								<td>3</td>
								<td>33333333</td>
								<td>00015</td>
								<td>4150</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
						</tbody>
				</table>
				</div>
			</div>
			<div class="js1__quest">
				<h2>Вопрос</h2>
				<div>Часто посетители из одного заказа приходят не одновременно на события. Возникает необходимость чекинить их по отдельности. Для этого у каждого билета должен быть свой баркод. Если в одном заказе было куплено несколько билетов, 2 взрослых, 3 детских, 4 льготных - то должно быть 9 баркодов для каждого билета соответственно. Задача - Показать конечный вид таблицы, где у каждого билета свой баркод. Объяснить свое решение.</div>
			</div>
			<div class="js1__answer">
				<h2>Ответ</h2>
				<div>
					В данном случае можно создавать новые записи для каждого билета (на каждого человека в заказе по билету), при этом у каждой записи будет стоять одна и та же дата события, id события и id покупателя. То есть один заказ - это множество билетов с данными, у каждого билетя своя уникальная информация, общее только id покупателя, id и дата события.
					Также можно убрать поля ticket_adult_price, ticket_adult_quantity, ticket_kid_price, ticket_kid_quantity, так как каждый билет уникальный и у каждого своя стоимость, отсюда следует, что поле equal_price будет показывать стоимость текущего билета, а новое поле ticket_age - показывает тип билета - взрослый или детский
				</div>
				<div class="js1__table">
					<table class="table">
						<thead>
							<tr class="table__header">
								<td>id</td>
								<td>event_id</td>
								<td>event_date</td>
								<td>ticket_age</td>
								<td>barcode</td>
								<td>user_id</td>
								<td>equal_price</td>
								<td>created</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>003</td>
								<td>2021-08-21 13:00:00</td>
								<td>adult</td>
								<td>11111111</td>
								<td>00451</td>
								<td>700</td>
								<td>2021-01-11 13:22:09</td>
							</tr>
							<tr>
								<td>2</td>
								<td>006</td>
								<td>2021-07-29 18:00:00</td>
								<td>kid</td>
								<td>22222222</td>
								<td>00364</td>
								<td>800</td>
								<td>2021-01-12 16:62:08</td>
							</tr>
							<tr>
								<td>3</td>
								<td>006</td>
								<td>2021-07-29 18:00:00</td>
								<td>kid</td>
								<td>33333333</td>
								<td>00364</td>
								<td>800</td>
								<td>2021-01-12 16:62:08</td>
							</tr>
							<tr>
								<td>4</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>adult</td>
								<td>44444444</td>
								<td>00015</td>
								<td>700</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
							<tr>
								<td>5</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>adult</td>
								<td>55555555</td>
								<td>00015</td>
								<td>700</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
							<tr>
								<td>6</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>adult</td>
								<td>66666666</td>
								<td>00015</td>
								<td>700</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
							<tr>
								<td>7</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>adult</td>
								<td>77777777</td>
								<td>00015</td>
								<td>700</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
							<tr>
								<td>8</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>kid</td>
								<td>88888888</td>
								<td>00015</td>
								<td>450</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
							<tr>
								<td>9</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>kid</td>
								<td>99999999</td>
								<td>00015</td>
								<td>450</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
							<tr>
								<td>10</td>
								<td>003</td>
								<td>2021-08-15 17:00:00</td>
								<td>kid</td>
								<td>11111112</td>
								<td>00015</td>
								<td>450</td>
								<td>2021-01-13 10:08:45</td>
							</tr>
						</tbody>
				</table>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.js1 {
	margin: 80px 0 0 0;
		&__quest {
			& h2 {
				font-size: 40px;
				font-weight: 600;
			}
			& div {
				margin: 15px 0 0 0;
			}
		}
		&__answer {
			margin: 20px 0 0 0;
			& h2 {
				font-size: 40px;
				font-weight: 600;
			}
			& div {
				margin: 15px 0 0 0;
			}
		}
		&__table {
			overflow: auto;
		}
}
.table {
		&__header {
			font-weight: 600;
		}
		td {
			padding: 10px;
			text-align: center;
		}
}


</style>