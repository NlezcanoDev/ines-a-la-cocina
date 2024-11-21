export enum TipoProducto {
	Pasteleria,
	Panaderia,
}

export namespace TipoProducto {
	export const FromKey: Record<TipoProducto, string> = {
		[TipoProducto.Pasteleria]: 'Pasteleria',
		[TipoProducto.Panaderia]: 'Panaderia',
	}
}

export enum CategoriaPasteleria {
	Torta,
	Reposteria,
	Cupcake,
	Postre,
	Envasado,
	Vegano,
	Keto,
	Celiaco,
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
		[CategoriaPasteleria.Celiaco]: 'Apto celíaco',
	}

	export const FromValue: Record<string, CategoriaPasteleria> = {
		tortas: CategoriaPasteleria.Torta,
		repostería: CategoriaPasteleria.Reposteria,
		cupcakes: CategoriaPasteleria.Cupcake,
		postres: CategoriaPasteleria.Postre,
		envasados: CategoriaPasteleria.Envasado,
		vegano: CategoriaPasteleria.Vegano,
		keto: CategoriaPasteleria.Keto,
		apto_celíaco: CategoriaPasteleria.Celiaco,
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
	Celiaco,
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
		[CategoriaPanaderia.Celiaco]: 'Apto celíaco',
	}

	export const FromValue: Record<string, CategoriaPanaderia> = {
		panes: CategoriaPanaderia.Pan,
		budines: CategoriaPanaderia.Budin,
		cookies: CategoriaPanaderia.Cookie,
		tartas: CategoriaPanaderia.Tarta,
		festivo: CategoriaPanaderia.Festivo,
		vegano: CategoriaPanaderia.Vegano,
		keto: CategoriaPanaderia.Keto,
		apto_celíaco: CategoriaPanaderia.Celiaco,
	}
}
