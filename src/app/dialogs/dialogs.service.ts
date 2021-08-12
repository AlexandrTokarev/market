import {Injectable} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SignInDialogComponent} from "./sign-in-dialog/sign-in-dialog.component";

@Injectable({
	providedIn: 'root'
})
export class DialogsService {
	constructor(
		private readonly modalService: NgbModal,
	) {
	}

	signIn() {
		return this.modalService.open(SignInDialogComponent);
	}
}
