import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarsPageComponent } from './bars-page.component';

const routes: Routes = [
	{ path: '', component: BarsPageComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
	exports: [RouterModule],
	declarations: [
		BarsPageComponent
	]
})
export class BarsPageRoutingModule {
}
