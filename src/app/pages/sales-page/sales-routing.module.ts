import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesPageComponent} from './sales-page.component';

const routes: Routes = [
	{path: '', component: SalesPageComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [
		SalesPageComponent
	]
})
export class SalesPageRoutingModule {
}
