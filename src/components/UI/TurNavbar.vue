<template>
	<header class="header">
		<nav class="header__menu menu">
			<div class="menu__body" ref="menuList">
				<ul class="menu__list">
					<li class="menu__item" @click="$router.push('/')"><tur-button>Верстка 1</tur-button></li>
					<li class="menu__item" @click="$router.push('/html2')"><tur-button>Верстка 2</tur-button></li>
					<li class="menu__item" @click="$router.push('/js1')"><tur-button>JS 1</tur-button></li>
					<li class="menu__item" @click="$router.push('/js2')"><tur-button>JS 2</tur-button></li>
				</ul>
			</div>
			<div class="header__burger" @click="togleMenu" ref="menuBurger">
				<span></span>
			</div>
		</nav>
	</header>
</template>

<script>

export default {
	name: 'tur-navbar',
	methods: {
		togleMenu() {
			this.$refs.menuBurger.classList.toggle("header__burger_active");
			this.$refs.menuList.classList.toggle("menu__body_active");
			document.body.classList.toggle('_lock');
		}
	}
}
</script>

<style lang="scss">
	.header {
		padding: 0 15px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
    border: 1px solid;
		&__burger {
			position: relative;
			width: 30px;
			height: 20px;
			z-index: 3;
			&::before {
				content: '';
				transition: transform 0.3s ease 0s;
				position: absolute;
				width: 100%;
				height: 3px;
				background: #FFD83C;
				top: 0;
				left: 0;
			}
			&::after {
				content: '';
				transition: transform 0.3s ease 0s;
				position: absolute;
				width: 100%;
				height: 3px;
				background: #FFD83C;
				bottom: 0;
				left: 0;
			}
			& > span {
				display: inline-block;
				position: absolute;
				width: 100%;
				height: 3px;
				background: #FFD83C;
				bottom: 50%;
				left: 0;
				transform: translate(0, 50%);
			}
			&_active {
				&::before {
					top: 50%;
					transform: rotate(45deg) translate(0, -50%);
			}
			&::after {
				top: 50%;
				transform: rotate(-45deg) translate(0, -50%);
			}
			& > span {
				display: none;
			}
			}
		}
		&__menu {
		}
}
.menu {
	&::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background-color: #222;
    border: 1px solid;
		width: 100%;
		height: 60px;
	}
		&__body {
			position: fixed;
			transition: left 0.3s ease 0s;
			width: 100%;
			top: 0px;
			left: -100%;
			height: 100%;
			padding: 80px 30px 30px 30px;
			overflow: auto;
			background: rgba($color: #000000, $alpha: 0.9);
			&_active {
				left: 0;
			}
		}
		&__list {
			display: flex;
			position: relative;
			flex-direction: column;
			gap: 15px;
		}
		&__item {
			& .button {
				max-width: 100%;
			}
		}
}
body._lock {
	overflow: hidden;
}
@media (min-width: 767.98px) {
	.header{
		&__burger {
			display: none;
		}
		&__menu {
			&::before{
				display: none;
			}
		}
	}
	.menu {
		&__body {
			left: 0;
			height: 60px;
			padding: 0;
		}
		&__list {
			height: 60px;
			align-items: center;
			flex-direction: row;
			justify-content: flex-end;
			padding: 0 10px 0 0;
		}
		&__item {
			& .button {
				height: 40px;
				padding: 8px 22px;
			}
		}
	}
}
</style>