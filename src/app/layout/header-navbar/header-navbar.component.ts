import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-header-navbar',
	templateUrl: './header-navbar.component.html',
	styleUrls: ['./header-navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNavbarComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
