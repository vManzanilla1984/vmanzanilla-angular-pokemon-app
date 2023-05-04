import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.css']
})
export class PageDescriptionComponent {

  @Input()
  public title: string = ""

  @Input()
  public description: string = ""

}
