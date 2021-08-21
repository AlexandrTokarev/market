import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPageHomeComponent } from './menu-page-home.component';

describe('MenuPageHomeComponent', () => {
  let component: MenuPageHomeComponent;
  let fixture: ComponentFixture<MenuPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPageHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
