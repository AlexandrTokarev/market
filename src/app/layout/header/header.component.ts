import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../../dialogs/sign-in/sign-in.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	searchTerm = '';

	constructor(
		private modalService: NgbModal
	) {
	}

	ngOnInit(): void {
	}

	onSignIn() {
		this.modalService.open(SignInComponent).result.then((result) => {
			console.log(`Closed with: ${result}`);
		}, (reason) => {
			console.log(`Dismissed ${reason}`);
		});
	}

}
