<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import type { Producto } from '../data/productos.types';


type Props = {
    productos: Array<Producto>
    }
    defineProps<Props>()

const onSlideChange = () => {
console.log('slide change');
};
</script>

<template>
    <Swiper
        :modules="[Navigation, EffectFade]"
        :slides-per-view="1"
        :space-between="50"
        effect="fade"
        :navigation="true"
        :autoplay="{delay: 2000}"
        
        @slideChange="onSlideChange"
    >
        <SwiperSlide v-for="producto in productos" :key="producto.id">
            {{ producto.nombre }}
        </SwiperSlide>
    </Swiper>

</template>

<style scoped lang="css">
  .swiper {
    width: 600px;
    height: 300px;
    color: black;
  }

  .swiper-slide {
    color: black;
    border: 1px solid red;
    width: 600px;
    display: block;
  }

  .is-previous {
    border: 1px solid orange;
  }
</style>