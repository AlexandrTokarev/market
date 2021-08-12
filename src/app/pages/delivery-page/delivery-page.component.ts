import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliveryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
