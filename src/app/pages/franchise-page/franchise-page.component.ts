import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-franchise-page',
  templateUrl: './franchise-page.component.html',
  styleUrls: ['./franchise-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FranchisePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
