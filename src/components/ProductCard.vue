<script setup lang="ts">
import Torta from "../assets/img/productos/porcion.jpg"

import Keto from "../assets/icons/card/keto.svg"
import SinTacc from "../assets/icons/card/sin-tacc.svg"
import Vegano from "../assets/icons/card/vegano.svg"
import Unidad from "../assets/icons/card/unidad.svg"
import Porcion from "../assets/icons/card/porcion.svg"

import type { Producto } from "../data/productos.types";

interface Props {
  producto: Producto
}

defineProps<Props>()
</script>

<template>
<div class="card swiper-slide">
    <div class="card-img">
        <img :src="Torta.src" :alt="producto.nombre">
    </div>
    <div class="card-content">
        <h3>{{producto.nombre}}</h3>
        <p>{{producto.descripcion}}</p>
    </div>
    <div class="card-categorias">
      <img 
        v-if="producto.apto.some((a) => a === 'keto')" 
        :src="Keto.src" 
        alt="Keto">
      <img 
        v-if="producto.apto.some((a) => a === 'celiaco')" 
        :src="SinTacc.src" 
        alt="Sin TACC"
      >
      <img 
        v-if="producto.apto.some((a) => a === 'vegano')" 
        :src="Vegano.src" 
        alt="Vegano"
      >
      <img 
        v-if="producto.presentacion.some((a) => a === 'porcion')" 
        :src="Porcion.src" 
        alt="Venta por porción"
      >
      <img 
        v-if="producto.presentacion.some((a) => a === 'unidad')" 
        :src="Unidad.src" 
        alt="Venta por unidad completa"
      >
    </div>
</div>
</template>

<style scoped lang="css">
.card {
    width: 292px;
    height: 420px;
    background-color: white;
    box-shadow: 2px 2px 4px 0px #72483233;
    border-radius: 8px;
    margin: 8px;
  }
.card-img img {
  border-radius: 8px 8px 0 0;
}

.card-content {
  padding: 24px;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: var(--chocolate);
  }

  p {
    color: black;
  }
}

.card-categorias {
  padding: 0 24px;
  display: flex;
  justify-content: center;
  column-gap: 8px;
}
</style>