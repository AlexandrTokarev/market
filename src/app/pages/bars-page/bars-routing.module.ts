import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarsPageComponent} from './bars-page.component';

const routes: Routes = [
	{path: '', component: BarsPageComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [
		BarsPageComponent
	]
})
export class BarsPageRoutingModule {
}
