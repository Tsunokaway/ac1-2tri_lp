import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '/',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-recomendacao-cultura/:temperatura',
    loadChildren: () => import('./tela-recomendacao-cultura/tela-recomendacao-cultura.module').then(m => m.TelaRecomendacaoCulturaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
