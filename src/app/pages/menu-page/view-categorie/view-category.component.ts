import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from "../../../services/product.service";

@Component({
	selector: 'app-view-category',
	templateUrl: './view-category.component.html',
	styleUrls: ['./view-category.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewCategoryComponent implements OnInit {
	category: AppTypes.Schemas.Category | undefined;

	constructor(
		private activeRoute: ActivatedRoute,
		private readonly productService: ProductService,
		private readonly changeDetector: ChangeDetectorRef
	) {
	}

	ngOnInit(): void {
		this.activeRoute.params.subscribe(routeParams => {
			this.category = this.productService.getCategory(routeParams['name']);
			this.changeDetector.detectChanges();
		});
	}

}
