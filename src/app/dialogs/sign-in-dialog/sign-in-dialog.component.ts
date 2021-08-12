import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in-dialog.component.html',
	styleUrls: ['./sign-in-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInDialogComponent implements OnInit {

	constructor(public activeModal: NgbActiveModal) {
	}

	ngOnInit(): void {
	}
}
