declare namespace AppTypes {
	namespace Schemas {
		export interface Product {
			id: number;
			name: string;
			description: string | null;
			price: number | null;
			discount: number | null;
			categoryIds: number[];
			image?: string;
		}
		export interface Category {
			id: number;
			name: string;
			description?: string | null;
			subCategories?: Category[];
		}
	}
}
