import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from './menu-page.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ViewCategoryComponent } from './view-categorie/view-category.component';
import { MenuPageHomeComponent } from './menu-page-home/menu-page-home.component';
import { ProductsListComponent } from './view-categorie/products-list/products-list.component';
import { ProductCardComponent } from './view-categorie/products-list/product-card/product-card.component';

const routes: Routes = [
	{
		path: '',
		component: MenuPageComponent,
		children: [
			{ path: ':name', component: ViewCategoryComponent },
			{ path: '', component: MenuPageHomeComponent },
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), NgbNavModule, CommonModule],
	exports: [RouterModule],
	declarations: [
		MenuPageComponent,
		ViewCategoryComponent,
		MenuPageHomeComponent,
		ProductsListComponent,
		ProductCardComponent,
	]
})
export class MenuPageRoutingModule {
}
