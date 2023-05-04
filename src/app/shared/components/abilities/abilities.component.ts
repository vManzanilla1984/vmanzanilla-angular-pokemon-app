import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent {

  @Input()
  public abilities: string[] = []

}
