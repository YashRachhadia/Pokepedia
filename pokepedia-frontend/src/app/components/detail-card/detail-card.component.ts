import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent implements OnInit {
  constructor() {}

  @Input() image: string;
  @Input() stats: any[];
  @Input() types: any[];
  @Input() abilities: any[];
  @Input() pokename: string;
  @Input() id: number;

  ngOnInit(): void {}
}
