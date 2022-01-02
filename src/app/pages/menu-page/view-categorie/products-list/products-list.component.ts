import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, TrackByFunction } from '@angular/core';
import { ProductService } from '../../../../services/product.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit, OnChanges {
	@Input() categoryId = 0;
	products: AppTypes.Schemas.Product[] = [];

	constructor(
		private readonly productService: ProductService,
	) {
	}

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges) {
		if ('categoryId' in changes) {
			this.products = this.productService.getProducts(changes.categoryId.currentValue);
			console.log('products', this.products);
		}
		console.log('Name', changes);
	}

	trackByProduct: TrackByFunction<AppTypes.Schemas.Product> = (index, item) => item.id;

}
