import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInDialogComponent } from './sign-in-dialog.component';

describe('SignInComponent', () => {
	let component: SignInDialogComponent;
	let fixture: ComponentFixture<SignInDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SignInDialogComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SignInDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
