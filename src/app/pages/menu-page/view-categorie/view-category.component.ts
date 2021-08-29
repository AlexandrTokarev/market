import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../../services/product.service';

@Component({
	selector: 'app-view-category',
	templateUrl: './view-category.component.html',
	styleUrls: ['./view-category.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewCategoryComponent implements OnInit, OnDestroy {
	category: AppTypes.Schemas.Category | undefined;
	selectedCategoryId = 0;

	private destroy$ = new Subject<void>();

	constructor(
		private activeRoute: ActivatedRoute,
		private readonly productService: ProductService,
		private readonly changeDetector: ChangeDetectorRef
	) {
	}

	ngOnInit(): void {
		this.activeRoute.params
			.pipe(takeUntil(this.destroy$))
			.subscribe(routeParams => {
				this.category = this.productService.getCategory(routeParams.name);
				if (this.category) {
					this.selectedCategoryId = this.category.id;
				}
				this.changeDetector.detectChanges();
			});
	}

	ngOnDestroy() {
		this.destroy$.next();
	}

	selectSubCat(name: number) {
		this.selectedCategoryId = name;
	}

}
