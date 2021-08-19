import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-menu-page',
	templateUrl: './menu-page.component.html',
	styleUrls: ['./menu-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPageComponent implements OnInit {
	productCategories: AppTypes.Schemas.Category[] = [];

	constructor(
		private readonly productService: ProductService,
		private readonly changeDetector: ChangeDetectorRef
	) {
	}

	ngOnInit(): void {
		this.productService.getCategories()
			.subscribe(c => {
				this.productCategories = c.slice(0, 12);
				this.changeDetector.detectChanges();
			});
	}

}
