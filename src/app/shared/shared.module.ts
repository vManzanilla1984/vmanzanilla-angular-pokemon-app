import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFrontComponent } from './components/card-front/card-front.component';
import { CardBackComponent } from './components/card-back/card-back.component';
import { CardComponent } from './components/card/card.component';
import { StatComponent } from './components/stat/stat.component';
import { TypeComponent } from './components/type/type.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { PageDescriptionComponent } from './components/page-description/page-description.component';
import { PreloaderTotalPageComponent } from './components/preloader-total-page/preloader-total-page.component';
import { PreloaderCardComponent } from './components/preloader-card/preloader-card.component';

@NgModule({
  declarations: [
    CardFrontComponent,
    CardBackComponent,
    CardComponent,
    StatComponent,
    TypeComponent,
    AbilitiesComponent,
    PageDescriptionComponent,
    PreloaderTotalPageComponent,
    PreloaderCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardFrontComponent,
    CardBackComponent,
    PageDescriptionComponent,
    PreloaderTotalPageComponent,
    PreloaderCardComponent
  ]
})
export class SharedModule { }
