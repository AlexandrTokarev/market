import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IMaskModule} from 'angular-imask';

// Layout
import {HeaderComponent} from './layout/header/header.component';
import {SkeletonComponent} from './layout/skeleton/skeleton.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderNavbarComponent} from './layout/header-navbar/header-navbar.component';

// Dialogs
import {SignInDialogComponent} from './dialogs/sign-in-dialog/sign-in-dialog.component';

// Services
import {CartService} from './services/cart.service';

// Components
import {CartComponent} from './components/cart/cart.component';


const routes: Routes = [
	{path: 'menu', loadChildren: () => import('./pages/menu-page/menu-routing.module').then(m => m.MenuPageRoutingModule)},
	{path: 'bars', loadChildren: () => import('./pages/bars-page/bars-routing.module').then(m => m.BarsPageRoutingModule)},
	{path: 'sales', loadChildren: () => import('./pages/sales-page/sales-routing.module').then(m => m.SalesPageRoutingModule)},
	{path: 'info', loadChildren: () => import('./pages/info-page/info-routing.module').then(m => m.InfoPageRoutingModule)},
	{path: 'delivery', loadChildren: () => import('./pages/delivery-page/delivery-routing.module').then(m => m.DeliveryPageRoutingModule)},
	{path: 'franchise', loadChildren: () => import('./pages/franchise-page/franchise-routing.module').then(m => m.FranchisePageRoutingModule)},
	{path: '', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SkeletonComponent,
		FooterComponent,
		SignInDialogComponent,
		HeaderNavbarComponent,
		CartComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule,
		RouterModule.forRoot(routes),
		IMaskModule
	],
	providers: [CartService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
