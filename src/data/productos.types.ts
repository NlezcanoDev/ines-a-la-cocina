import type { CategoriaPanaderia, CategoriaPasteleria, TipoProducto } from "./productos.enum";

export type ProductoApto = "vegano" | "keto" | "celiaco";
export type Presentacion = "unidad" | "porcion";


export interface Producto {
    id: number
    nombre: string;
    descripcion: string;
    img: string;
    tipo: TipoProducto
    categorias: Array<CategoriaPasteleria | CategoriaPanaderia>;
    apto: Array<ProductoApto>;
    presentacion: Array<Presentacion>;
}

export interface ProductoFilter {
    tipo: TipoProducto
    categoria: CategoriaPasteleria | CategoriaPanaderia | null
}