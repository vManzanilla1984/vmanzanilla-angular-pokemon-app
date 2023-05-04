import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent {

  @Input()
  public description: string = ''

  @Input()
  public value: string = ''

}
