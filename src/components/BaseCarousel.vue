<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import type { Producto } from '../data/productos.types';
import ProductCard from './ProductCard.vue';
import ChevronLeft from '../assets/icons/chevron/chevron-left.svg'
import ChevronRight from '../assets/icons/chevron/chevron-right.svg'
import { onBeforeUpdate, ref, watch } from 'vue';
import type SwiperType from 'swiper';

type Props = {
    productos: Array<Producto>
    }
    const props = defineProps<Props>()

const slider = ref(null);
const showPrev = ref(false)
const showNext = ref(true)

const onSlideChange = () => {
    showPrev.value = props.productos.length > 4 && slider.value.realIndex > 0
    showNext.value = props.productos.length > 4 && !slider.value.isEnd
};

const onSwiper = (swiper: SwiperType) => {
  slider.value = swiper;
};

watch(()=> props.productos, ()=> {
    slider.value.slideTo(0, 400)
    showPrev.value = false
    showNext.value = props.productos.length > 4
})
</script>

<template>
    <div class="carousel-container relative mx-3">
        <Swiper
            class="swiper"
            :modules="[Autoplay, Navigation]"
            :space-between="24"
            :slides-per-view="4"
            :loop="false"
            :normalizeSlideIndex="true"
            :initialState="0"
            @slideChange="onSlideChange"
            @swiper="onSwiper"
            >
            <SwiperSlide v-for="producto in productos" :key="producto.id">
                <ProductCard :producto="producto"/>
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
            <img :src="ChevronRight.src" alt="vista siguiente"/>
        </div>
    </div>
</template>

<style scoped lang="css">

.swiper {
width: calc(100% - 100px);
height: 436px;
margin-top: 24px;
margin-right: auto;
color: black;
overflow: hidden
}

.swiper-wrapper {
    transform: translate3d(60px, 0px, 0px);
    padding: 8px;
}

.swiper-slide {
color: black;
width: 292px !important;
display: block;
}

.swiper-nav {
    display: grid;
    place-content: center;
    position: absolute;
}
 </style>