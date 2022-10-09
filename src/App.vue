<template>
  <div class="wrapper">
    <tur-navbar></tur-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/fonts.scss';
@import '@/assets/scss/nullstyle.scss';

body {
  font-size: 18px;
  font-family: 'Open Sans';
  font-weight: 400;
  line-height: 1.11;
}

.wrapper {
  overflow: hidden;
	display: flex;
	flex-direction: column;
	min-height: 100%;
}

[class*="__container"] {
  max-width: 100%;
  padding: 0 17px;
  margin: 0 auto;
}

@media (min-width: 767.98px) {
  [class*="__container"] {
    max-width: 1036px;
    padding: 0 17px;
  }
}
</style>