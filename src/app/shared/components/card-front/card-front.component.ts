import { cardInfo } from './../../interfaces/card-info.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.css']
})
export class CardFrontComponent {

  @Input()
  public info: cardInfo = {
    name: ''
  }

}
