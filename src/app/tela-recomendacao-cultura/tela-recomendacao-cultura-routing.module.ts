import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaRecomendacaoCulturaPage } from './tela-recomendacao-cultura.page';

const routes: Routes = [
  {
    path: '',
    component: TelaRecomendacaoCulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaRecomendacaoCulturaPageRoutingModule {}
