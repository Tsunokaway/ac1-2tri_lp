import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaRecomendacaoCulturaPageRoutingModule } from './tela-recomendacao-cultura-routing.module';

import { TelaRecomendacaoCulturaPage } from './tela-recomendacao-cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaRecomendacaoCulturaPageRoutingModule
  ],
  declarations: [TelaRecomendacaoCulturaPage]
})
export class TelaRecomendacaoCulturaPageModule {}
