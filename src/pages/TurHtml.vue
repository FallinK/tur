<template>
	<section class="html2">
		<div class="html2__container">
			<div class="html2__quest">
				<h1>Вопрос</h1>
				<div>В текст статьи на странице с адаптивной версткой менеджеры добавили таблицу. На десктопе таблицы выглядят хорошо, но на мобиле - появляется горизонтальный скролл, верстка едет. Что делать?</div>
			</div>
			<div class="html2__answer">
				<h2>Ответ</h2>
				<div>Скролл на странице появляется при ширине экрана 606px, следовательно, нужн ообернуть тег table в div, затем необходимо написать медиазапрос, в котором для table будет указан размер width в пикселях, например 563px. Сам div в этом же медиазапросе будет иметь запись overflow: auto. Таким образом горизонтальный скролл будет у таблицы, а не у всей страницы.</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	.html2 {
		margin: 80px 0 0 0;
		&__quest {
			& h1 {
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
}

</style>