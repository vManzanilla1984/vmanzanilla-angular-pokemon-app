import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {

  @Input()
  public type: string = ''

}
