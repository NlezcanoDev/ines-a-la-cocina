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
	<div class="card swiper-slide">
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
	height: 290px;
	background-color: white;
	box-shadow: 2px 2px 4px 0px #72483233;
	border-radius: 8px;
	display: grid !important;
	grid-template-columns: 1fr;
	grid-template-rows: 140px auto;
	gap: 8px;
	margin: 8px 0;
	overflow: hidden;
}

.card-img {
	height: 140px;
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

/* TABLE SM */
@media (min-width: 640px) {
	.card {
		height: 326px;
		grid-template-rows: 144px auto;
	}

	.card-img {
		height: 144px;
	}

	.card-content {
		padding: 12px;
	}
}

/* TABLET MD */
@media (min-width: 768px) {
	.card {
		height: 340px;
		grid-template-rows: 140px auto;
	}

	.card-img {
		height: 140px;
	}
	.card-content {
		padding: 14px;

		h3 {
			font-size: 20px;
			line-height: 22px;
			text-overflow: ellipsis;
			text-wrap: nowrap;
		}

		p {
			font-size: 14px;
			line-height: 18px;
		}
	}
}

/* TABLET LG */
@media (min-width: 1024px) {
	.card {
		height: 360px;
		grid-template-rows: 180px auto;
	}

	.card-img {
		height: 180px;
	}

	.card-content {
		padding: 16px;
		/* h3 {
			font-size: 24px;
		} */
	}
}

/* DESKTOP */
@media (min-width: 1280px) {
	.card {
		grid-template-rows: 200px auto;
		gap: 16px;
		height: 436px;
	}

	.card-img {
		height: 200px;
	}

	.card-content {
		padding: 18px;
		h3 {
			font-size: 24px;
			margin-bottom: 12px;
		}

		p {
			font-size: 18px;
			line-height: 22px;
		}
	}

	.card-categorias {
		gap: 18px;
	}

	.card-categorias img {
		width: 30px;
	}
}

/* DESKTOP LG */
@media (min-width: 1536px) {
}
</style>
