import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, AfterViewInit {

	@ViewChild('myDrop', { static: true }) private ngbDrop!: NgbDropdown;

	constructor(
		public readonly cart: CartService
	) {
	}

	ngOnInit(): void {
		// this.cart.addLine({ id: 1, category: 'Test', description: 'Desc', name: 'Шашлык из свинины', price: 230 }, 1);
		// this.cart.addLine({ id: 4, category: 'Test', description: 'Desc 2', name: 'Шашлык из курицы', price: 220 }, 1);
	}

	ngAfterViewInit(): void {
	}

}
