<script setup lang="ts">
import type { Producto } from '../../data/productos.types'
import ProductCard from './ProductCard.vue'
import ChevronDown from '../../assets/icons/chevron/chevron-down.svg'

import { ref } from 'vue'

type Props = {
	productos: Array<Producto>
}
const props = defineProps<Props>()
const isAccordionOpen = ref(false)

const toggleAccordion = (val: boolean) => {
	console.log('val', val)
	isAccordionOpen.value = val
}
</script>

<template>
	<div
		class="accordion-container mx-3 px-4 md:px-8 lg:px-16"
		:class="{ 'accordion-open': isAccordionOpen }"
	>
		<ProductCard
			v-for="producto in productos"
			:key="producto.id"
			:producto="producto"
		/>
		<div class="toggle-container">
			<button
				class="toggle-btn"
				@click="toggleAccordion(!isAccordionOpen)"
				:class="{ 'icon-rotate': isAccordionOpen }"
			>
				<img :src="ChevronDown.src" alt="toggle acordión" />
			</button>
		</div>
	</div>
</template>

<style scoped lang="css">
.accordion-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 8px 16px;
	align-items: center;
	position: relative;
	margin-bottom: 30px;
	max-height: 320px;
	transition: max-height 1s ease-out;
	overflow: hidden;
}

.accordion-open {
	max-height: 2000px;
	transition: max-height 1s ease-out;
}

.toggle-container {
	width: 100%;
	position: absolute;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
}

.toggle-btn {
	background-color: var(--orange);
	width: 30px;
	height: 30px;
	border-radius: 15px;
	display: grid;
	place-content: center;
	transform: rotate(0deg);
	transform-origin: center;
	transition: all 300ms linear;
}

.icon-rotate {
	transform-origin: center;
	transform: rotate(180deg);
	transition: all 300ms linear;
}

/* TABLE SM */
@media (min-width: 640px) {
	.accordion-container {
		display: none;
	}
}
</style>
