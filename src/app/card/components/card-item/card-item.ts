import { CurrencyPipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [CurrencyPipe,UpperCasePipe],
  templateUrl: './card-item.html',
  styleUrls: ['./card-item.css']
})
export class CardItem {

}
