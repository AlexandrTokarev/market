import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { categories } from '../data/categories';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private products: AppTypes.Schemas.Product[] = [];
	private categories: AppTypes.Schemas.Category[] = [];

	constructor(private dataSource: StaticDataSource) {
		dataSource.getProducts().subscribe(data => {
			this.products = data;
			this.categories = categories;
		});
	}
	getProducts(categoryId: number): AppTypes.Schemas.Product[] {
		return this.products.filter(p => p.categoryIds.includes(categoryId));
	}
	getProduct(id: number): AppTypes.Schemas.Product | undefined {
		return this.products.find(p => p.id === id);
	}
	getCategories(): Observable<AppTypes.Schemas.Category[]> {
		return of(this.categories).pipe(delay(120));
	}
	getCategory(name: string): AppTypes.Schemas.Category | undefined {
		return this.categories.find(c => c.name === name);
	}
}
