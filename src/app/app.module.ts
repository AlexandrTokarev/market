import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './dialogs/sign-in/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderNavbarComponent } from './layout/header-navbar/header-navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SkeletonComponent,
		FooterComponent,
		SignInComponent,
		HeaderNavbarComponent,
		CartComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule
	],
	providers: [CartService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
