import { cardInfo } from './../../interfaces/card-info.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public info: cardInfo = {
    name: ''
  }

}
