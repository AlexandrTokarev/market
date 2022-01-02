import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { salads, soups } from '../data/products';
@Injectable({
	providedIn: 'root'
})
export class StaticDataSource {
	private products: AppTypes.Schemas.Product[] = [
		// Супы
		...soups,
		// Салаты
		...salads,
	];

	getProducts(): Observable<AppTypes.Schemas.Product[]> {
		return from([this.products]);
	}
}
