import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
	@Input() product: AppTypes.Schemas.Product | null = null;

	constructor() {
	}

	ngOnInit(): void {
	}

}
