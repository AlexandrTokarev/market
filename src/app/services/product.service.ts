import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { StaticDataSource } from './static.datasource';
import { categories } from '../data/categories';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private products: Product[] = [];
	private categories: AppTypes.Schemas.Category[] = [];

	constructor(private dataSource: StaticDataSource) {
		dataSource.getProducts().subscribe(data => {
			this.products = data;
			this.categories = categories;
		});
	}
	getProducts(category: string | null = null): Product[] {
		return this.products.filter(p => category == null || category === p.category);
	}
	getProduct(id: number): Product | undefined {
		return this.products.find(p => p.id === id);
	}
	getCategories(): Observable<AppTypes.Schemas.Category[]> {
		return of(this.categories).pipe(delay(120));
	}
}
