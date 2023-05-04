import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFrontComponent } from './card-front/card-front.component';
import { CardBackComponent } from './card-back/card-back.component';
import { CardComponent } from './card/card.component';
import { StatComponent } from './stat/stat.component';
import { TypeComponent } from './type/type.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { PageDescriptionComponent } from './page-description/page-description.component';

@NgModule({
  declarations: [
    CardFrontComponent,
    CardBackComponent,
    CardComponent,
    StatComponent,
    TypeComponent,
    AbilitiesComponent,
    PageDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardFrontComponent,
    CardBackComponent,
    PageDescriptionComponent
  ]
})
export class SharedModule { }
