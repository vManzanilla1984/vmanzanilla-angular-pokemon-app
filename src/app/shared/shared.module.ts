import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFrontComponent } from './card-front/card-front.component';
import { CardBackComponent } from './card-back/card-back.component';
import { CardComponent } from './card/card.component';
import { StatComponent } from './stat/stat.component';
import { TypeComponent } from './type/type.component';
import { AbilitiesComponent } from './abilities/abilities.component';

@NgModule({
  declarations: [
    CardFrontComponent,
    CardBackComponent,
    CardComponent,
    StatComponent,
    TypeComponent,
    AbilitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardFrontComponent,
    CardBackComponent
  ]
})
export class SharedModule { }