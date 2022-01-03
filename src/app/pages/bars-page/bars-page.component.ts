import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

type Address = {
  id: number;
  street: string;
  home: string;
  phone: string;
}

@Component({
  selector: 'app-bars-page',
  templateUrl: './bars-page.component.html',
  styleUrls: ['./bars-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarsPageComponent implements OnInit {

  readonly addresses: Address[] = [
    { id: 1, street: 'ул 70 лет Октября', home: '43', phone: '+78005553535' },
    { id: 2, street: 'пр-кт Карла Маркса', home: '18/1', phone: '+78005553535' },
    { id: 3, street: 'ул Гагарина', home: '14', phone: '+78005553535' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
