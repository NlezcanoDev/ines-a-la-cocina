import { CategoriaPanaderia, CategoriaPasteleria, TipoProducto } from "./productos.enum";
import { type Producto, type ProductoFilter } from "./productos.types";

export async function getProductos(filter: ProductoFilter) {
    const data = await fetch('./productos.json');
    let productos: Array<Producto> = await data.json();

    return productos.filter(p => p.tipo === filter.tipo && p.categorias.includes(filter.categoria));
}

export function getCategorias(tipo: TipoProducto): Array<string> {
    const categorias = Object.keys(tipo === TipoProducto.Panaderia ? CategoriaPanaderia : CategoriaPasteleria);

    return categorias
        .map((c) => tipo === TipoProducto.Panaderia ? CategoriaPanaderia.FromKey[c] : CategoriaPasteleria.FromKey[c])
        .filter(c => c)
}