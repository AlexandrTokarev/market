import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DialogsService} from "../../dialogs/dialogs.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	searchTerm = '';

	constructor(
		private dialogsService: DialogsService
	) {
	}

	ngOnInit(): void {
	}

	onSignIn() {
		this.dialogsService.signIn()
	}

}
