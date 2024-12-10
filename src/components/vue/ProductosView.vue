<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import {
	CategoriaPanaderia,
	CategoriaPasteleria,
	TipoProducto,
} from '../../data/productos.enum'
import BaseCarousel from './BaseCarousel.vue'
import BaseAccordion from './BaseAccordion.vue'
import type { Producto } from '../../data/productos.types'

type Props = {
	id: string
	titulo: string
	tipo: TipoProducto
}

const props = defineProps<Props>()

const categoriaSelected = ref<string>()
const categorias = computed(() => getCategorias(props.tipo))

const totalProds = ref<Array<Producto>>([])
const productos = ref<Array<Producto>>([])

onBeforeMount(() => {
	categoriaSelected.value = categorias.value[0]
})
onMounted(async () => {
	await getProductos(props.tipo, categoriaSelected.value, true)
})

const getCategorias = (tipo: TipoProducto): Array<string> => {
	const categorias = Object.keys(
		tipo === TipoProducto.Panaderia
			? CategoriaPanaderia
			: CategoriaPasteleria,
	)

	return categorias
		.map((c) =>
			tipo === TipoProducto.Panaderia
				? CategoriaPanaderia.FromKey[c]
				: CategoriaPasteleria.FromKey[c],
		)
		.filter((c) => c)
}

async function getProductos(tipo: TipoProducto, cat: string, inicial = false) {
	cat = cat.toLowerCase().replaceAll(' ', '_')
	if (inicial) {
		const response = await fetch('./productos.json')
		const data: Array<Producto> = await response.json()
		totalProds.value = data
	}

	let baseCat: CategoriaPanaderia | CategoriaPasteleria

	if (tipo === TipoProducto.Pasteleria)
		baseCat = CategoriaPasteleria.FromValue[cat]
	else baseCat = CategoriaPanaderia.FromValue[cat]

	productos.value = totalProds.value.filter(
		(p) => p.tipo === tipo && p.categorias.includes(baseCat),
	)
}

const handleClick = async (cat: string) => {
	categoriaSelected.value = cat
	await getProductos(props.tipo, cat)
}
</script>

<template>
	<section>
		<div class="categorias container my-8 px-4 lg:px-8 xl:px-40">
			<h2>{{ titulo }}</h2>
			<div class="categorias-list">
				<button
					v-for="c in categorias"
					:key="c"
					role="button"
					:id="`categoria-${c.replaceAll(' ', '_').toLocaleLowerCase()}`"
					class="categoria-btn"
					:class="[
						TipoProducto.FromKey[tipo].toLowerCase(),
						{ selected: categoriaSelected === c },
					]"
					@click="handleClick(c)"
				>
					{{ c }}
				</button>
			</div>
		</div>
		<BaseAccordion :productos="productos" />
		<BaseCarousel :productos="productos" />
	</section>
</template>

<style scoped lang="css">
section {
	background-color: transparent !important;
}
.categorias {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	h2 {
		color: var(--orange);
		font-size: 22px;
		line-height: 28px;
		font-weight: bold;
		text-wrap: nowrap;
		padding-left: 8px;
	}
}

.categorias-list {
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	overflow-x: scroll;
	padding-bottom: 6px;
}

.categoria-btn {
	background-color: transparent;
	color: var(--chocolate);
	font-size: 16px;
	line-height: 16px;
	font-weight: 600;
	padding: 8px;
	text-transform: uppercase;
	text-wrap: nowrap;

	&:is(.selected) {
		padding-bottom: 4px;
	}

	&:last-of-type {
		padding-right: 0;
	}
}

.selected {
	border-bottom: 4px solid var(--orange);
}

/* TABLE SM */
@media (min-width: 640px) {
	section {
		padding-bottom: 0 !important;
	}
}

/* TABLET MD */
@media (min-width: 768px) {
	.categoria-btn {
		padding: 16px 18px;

		&:is(.selected) {
			padding-bottom: 12px;
		}
	}
}

/* TABLET LG */
@media (min-width: 1024px) {
	.categorias h2 {
		padding-left: 16px;
	}
	.categoria-btn {
		background-color: transparent;
		color: var(--chocolate);
		font-size: 16px;
		font-weight: 600;
		padding: 16px;
		text-transform: uppercase;

		&:is(.selected) {
			padding-bottom: 12px;
		}

		&:last-of-type {
			padding-right: 0;
		}
	}
}

/* DESKTOP */
@media (min-width: 1280px) {
	.categorias {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		h2 {
			color: var(--chocolate);
			font-size: 32px;
			line-height: 54px;
		}
	}

	.categorias-list {
		display: inline-flex;
		align-items: top;
		overflow-x: initial;
		width: fit-content;
	}

	.categoria-btn {
		background-color: transparent;
		color: var(--chocolate);
		font-size: 16px;
		font-weight: 600;
		padding: 16px;
		text-transform: uppercase;

		&:is(.selected) {
			padding-bottom: 12px;
		}

		&:last-of-type {
			padding-right: 0;
		}
	}
}

/* DESKTOP LG */
@media (min-width: 1536px) {
}
</style>
