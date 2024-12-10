<script setup lang="ts">
import Keto from '../../assets/icons/card/keto.svg'
import SinTacc from '../../assets/icons/card/sin-tacc.svg'
import Vegano from '../../assets/icons/card/vegano.svg'
import Unidad from '../../assets/icons/card/unidad.svg'
import Porcion from '../../assets/icons/card/porcion.svg'

import type { Producto } from '../../data/productos.types'

interface Props {
	producto: Producto
}

defineProps<Props>()
</script>

<template>
	<div class="card swiper-slide" v-memo="producto.img">
		<div
			v-if="producto.img"
			:id="`img-${producto.id.toString()}`"
			class="card-img"
		>
			<img :src="producto.img" :alt="producto.nombre" loading="lazy" />
		</div>
		<div class="card-info">
			<div class="card-content">
				<h3>{{ producto.nombre }}</h3>
				<p>{{ producto.descripcion }}</p>
			</div>
			<div class="card-categorias">
				<img
					v-if="producto.apto.some((a) => a === 'keto')"
					:src="Keto.src"
					alt="Keto"
				/>
				<img
					v-if="producto.apto.some((a) => a === 'celiaco')"
					:src="SinTacc.src"
					alt="Sin TACC"
				/>
				<img
					v-if="producto.apto.some((a) => a === 'vegano')"
					:src="Vegano.src"
					alt="Vegano"
				/>
				<img
					v-if="producto.presentacion.some((a) => a === 'porcion')"
					:src="Porcion.src"
					alt="Venta por porción"
				/>
				<img
					v-if="producto.presentacion.some((a) => a === 'unidad')"
					:src="Unidad.src"
					alt="Venta por unidad completa"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="css">
.card {
	width: auto;
	height: 290px;
	background-color: white;
	box-shadow: 2px 2px 4px 0px #72483233;
	border-radius: 8px;
	display: grid !important;
	grid-template-columns: 1fr;
	grid-template-rows: 140px auto;
	gap: 8px;
	margin: 8px auto;
}

.card-img {
	height: 100%;
	overflow: hidden;
}

.card-img img {
	width: 100%;
	object-fit: cover;
	object-position: 50% 50%;
	border-radius: 8px 8px 0 0;
}

.card-info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 16px;
}

.card-content {
	padding: 12px;

	h3 {
		font-size: 18px;
		font-weight: 700;
		color: var(--chocolate);
	}

	p {
		font-size: 14px;
		line-height: 18px;
		color: black;
	}
}

.card-categorias {
	padding: 0 24px;
	display: flex;
	justify-content: center;
	column-gap: 8px;
}

@media (min-width: 480px) {
	.card {
		max-width: 230px;
	}
}

/* TABLE SM */
@media (min-width: 640px) {
	.card {
		width: 200px;
		height: 326px;
		margin: 8px;
		max-width: none;
		grid-template-rows: 144px auto;
	}

	.card-content {
		padding: 12px;
	}
}

/* TABLET MD */
@media (min-width: 768px) {
	.card {
		height: 340px;
		grid-template-rows: 160px auto;
	}
	.card-content {
		padding: 18px;

		h3 {
			font-size: 22px;
		}

		p {
			font-size: 16px;
			line-height: 20px;
		}
	}
}

/* TABLET LG */
@media (min-width: 1024px) {
	.card {
		width: 100%;
		height: 420px;
		margin: 8px 16px;
		grid-template-rows: 200px auto;
	}

	.card-content {
		padding: 24px;
		h3 {
			font-size: 24px;
		}
	}
}

/* DESKTOP */
@media (min-width: 1280px) {
	.card {
		height: 436px;
	}
}

/* DESKTOP LG */
@media (min-width: 1536px) {
}
</style>
