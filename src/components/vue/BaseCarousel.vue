<script setup lang="ts">
import { ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

import ProductCard from './ProductCard.vue'
import ChevronLeft from '../../assets/icons/chevron/chevron-left.svg'
import ChevronRight from '../../assets/icons/chevron/chevron-right.svg'

import type { Producto } from '../../data/productos.types'
import type SwiperType from 'swiper'
import 'swiper/css'

type Props = {
	productos: Array<Producto>
}
const props = defineProps<Props>()

const slider = ref(null)
const showPrev = ref(false)
const showNext = ref(true)

const onSlideChange = () => {
	showPrev.value = props.productos.length > 4 && slider.value.realIndex > 0
	showNext.value = props.productos.length > 4 && !slider.value.isEnd
}

const onSwiper = (swiper: SwiperType) => {
	slider.value = swiper
}

watch(
	() => props.productos,
	() => {
		slider.value.slideTo(0, 400)
		showPrev.value = false
		showNext.value = props.productos.length > 4
	},
)
</script>

<template>
	<div class="carousel-container relative mx-3">
		<Swiper
			class="swiper"
			:modules="[Autoplay, Navigation]"
			:breakpoints="{
				640: {
					slidesPerView: 2.75,
					spaceBetween: 16,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 18,
				},
				860: {
					slidesPerView: 3.5,
					spaceBetween: 18,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 18,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
				1536: {
					slidesPerView: 4.5,
					spaceBetween: 30,
				},
				1900: {
					slidesPerView: 6.5,
					spaceBetween: 30,
				},
			}"
			:loop="false"
			:normalizeSlideIndex="true"
			:initialState="0"
			@slideChange="onSlideChange"
			@swiper="onSwiper"
		>
			<SwiperSlide v-for="producto in productos" :key="producto.id">
				<ProductCard :producto="producto" />
			</SwiperSlide>
		</Swiper>
		<div
			v-show="showPrev"
			class="swiper-nav swiper-button-prev"
			role="button"
			@click="slider.slidePrev()"
		>
			<img :src="ChevronLeft.src" alt="vista previa" />
		</div>
		<div
			v-show="showNext"
			class="swiper-nav swiper-button-next"
			role="button"
			@click="slider.slideNext()"
		>
			<img :src="ChevronRight.src" alt="vista siguiente" />
		</div>
	</div>
</template>

<style scoped lang="css">
.carousel-container {
	display: none;
}

/* TABLET SM */
@media (min-width: 640px) {
	.carousel-container {
		display: block;
	}
	.swiper {
		width: calc(100% - 50px);
		margin-top: 24px;
		margin-right: auto;
		color: black;
		overflow: hidden;
	}

	.swiper-wrapper {
		transform: translate3d(60px, 0px, 0px);
		padding: 8px;
	}

	.swiper-nav {
		display: grid;
		place-content: center;
		position: absolute;
	}
	.swiper-slide {
		color: black;
		display: block;
	}
}

/* TABLET MD */
@media (min-width: 768px) {
	.swiper {
		width: calc(100% - 65px);
		padding: 0 10px !important;
	}
}

/* TABLET LG */
@media (min-width: 1024px) {
	.swiper {
		width: calc(100% - 100px);
	}
}

/* DESKTOP */
@media (min-width: 1280px) {
	.swiper {
		max-width: 1820px;
	}
}
</style>
