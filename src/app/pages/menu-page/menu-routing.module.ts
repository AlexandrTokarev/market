import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuPageComponent} from './menu-page.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{path: '', component: MenuPageComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes), NgbNavModule, CommonModule],
	exports: [RouterModule],
	declarations: [
		MenuPageComponent
	]
})
export class MenuPageRoutingModule {
}
