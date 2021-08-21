import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu-page-home',
  templateUrl: './menu-page-home.component.html',
  styleUrls: ['./menu-page-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
