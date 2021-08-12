import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bars-page',
  templateUrl: './bars-page.component.html',
  styleUrls: ['./bars-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
