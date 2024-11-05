export enum TipoProducto { 
    Pasteleria,
    Panaderia
}

export enum CategoriaPasteleria {
    Torta,
    Reposteria,
    Cupcake,
    Postre,
    Envasado,
    Vegano,
    Keto,
    Celiaco
}


export namespace CategoriaPasteleria {
    export const FromKey: Record<CategoriaPasteleria, string> = {
        [CategoriaPasteleria.Torta]: 'Tortas',
        [CategoriaPasteleria.Reposteria]: 'Repostería',
        [CategoriaPasteleria.Cupcake]: 'Cupcakes',
        [CategoriaPasteleria.Postre]: 'Postres',
        [CategoriaPasteleria.Envasado]: 'Envasados',
        [CategoriaPasteleria.Vegano]: 'Vegano',
        [CategoriaPasteleria.Keto]: 'Keto',
        [CategoriaPasteleria.Celiaco]: 'Apto celíaco'
    }
}

export enum CategoriaPanaderia {
    Pan,
    Budin,
    Cookie,
    Tarta,
    Festivo,
    Vegano,
    Keto,
    Celiaco
}


export namespace CategoriaPanaderia {
    export const FromKey: Record<CategoriaPanaderia, string> = {
        [CategoriaPanaderia.Pan]: 'Panes',
        [CategoriaPanaderia.Budin]: 'Budines',
        [CategoriaPanaderia.Cookie]: 'Cookies',
        [CategoriaPanaderia.Tarta]: 'Tartas',
        [CategoriaPanaderia.Festivo]: 'Festivo',
        [CategoriaPanaderia.Vegano]: 'Vegano',
        [CategoriaPanaderia.Keto]: 'Keto',
        [CategoriaPanaderia.Celiaco]: 'Apto celíaco'
    }
}