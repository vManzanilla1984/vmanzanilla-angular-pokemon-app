import { CardInfo } from './../../interfaces/card-info.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.css']
})
export class CardBackComponent {

  @Input()
  public info: CardInfo | null = null

}
