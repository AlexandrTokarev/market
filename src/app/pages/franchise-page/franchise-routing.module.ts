import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FranchisePageComponent} from "./franchise-page.component";

const routes: Routes = [
	{path: '', component: FranchisePageComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [
		FranchisePageComponent
	]
})
export class FranchisePageRoutingModule {
}
