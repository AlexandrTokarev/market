import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { BarsPageComponent } from './bars-page.component';

const routes: Routes = [
	{ path: '', component: BarsPageComponent }
];

const mapConfig: YaConfig = {
	apikey: 'API_KEY',
	lang: 'en_US',
};

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		AngularYandexMapsModule.forRoot(mapConfig)
	],
	exports: [RouterModule],
	declarations: [
		BarsPageComponent
	]
})
export class BarsPageRoutingModule {
}
