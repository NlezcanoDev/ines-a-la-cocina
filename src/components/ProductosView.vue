<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { CategoriaPanaderia, CategoriaPasteleria, TipoProducto } from '../data/productos.enum';
import BaseCarousel from './BaseCarousel.vue';
import type { Producto } from '../data/productos.types';

type Props = {
  id: string
  titulo: string
  tipo: TipoProducto
  
}

const props = defineProps<Props>()

const categoriaSelected = ref<string>()
const categorias = computed(()=> getCategorias(props.tipo))
const productos = ref<Array<Producto>>([])

onBeforeMount(()=> {
    categoriaSelected.value = categorias.value[0]
})
onMounted(async ()=> await getProductos(props.tipo, categoriaSelected.value))

const getCategorias = (tipo: TipoProducto): Array<string>  =>{
    const categorias = Object
        .keys(tipo === TipoProducto.Panaderia ? CategoriaPanaderia : CategoriaPasteleria);

    return categorias
        .map((c) => tipo === TipoProducto.Panaderia 
            ? CategoriaPanaderia.FromKey[c] 
            : CategoriaPasteleria.FromKey[c])
        .filter(c => c)
}

async function getProductos(tipo:TipoProducto, cat: string) {
    cat = cat.toLowerCase().replaceAll(' ', '_')
    const response = await fetch("./productos.json")
    const data:Array<Producto> = await response.json()
    let baseCat:CategoriaPanaderia | CategoriaPasteleria;

    if(tipo === TipoProducto.Pasteleria)
        baseCat = CategoriaPasteleria.FromValue[cat]
    else 
        baseCat = CategoriaPanaderia.FromValue[cat]
    
    productos.value = data.filter((p) => p.tipo === tipo && p.categorias.includes(baseCat))
  }

const handleClick = async (cat: string) => {
    categoriaSelected.value = cat
    await getProductos(props.tipo, cat)
}

</script>

<template>
    <section>
        <div class="categorias container px-40">
            <h2>{{titulo}}</h2>
            <div class="categorias-list">
                <button v-for="c in categorias"
                    :key="c"
                    role="button"
                    :id="`categoria-${c.replaceAll(' ', '_').toLocaleLowerCase()}`"
                    class="categoria-btn"
                    :class="[
                        TipoProducto.FromKey[tipo].toLowerCase(), 
                        { selected: categoriaSelected === c }
                    ]"
                    @click="handleClick(c)"
                >
                    {{c}}
                </button>
            </div>
        </div>
        <BaseCarousel :productos="productos"/>
    </section>
</template>

<style scoped lang="css">
  .categorias {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--chocolate);
      font-size: 32px;
      line-height: 54px;
      font-weight: bold;
    }
  }

  .categorias-list {
    display: inline-flex;
    align-items: top;
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

  .selected {
    border-bottom: 4px solid var(--orange);
  }
</style>