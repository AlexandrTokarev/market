export class Product implements AppTypes.Schemas.Product {
	constructor(
		public id: number,
		public name: string,
		public categoryIds: number[],
		public description: string,
		public price: number,
		public discount: number,
		public image?: string,
	) { }
}
