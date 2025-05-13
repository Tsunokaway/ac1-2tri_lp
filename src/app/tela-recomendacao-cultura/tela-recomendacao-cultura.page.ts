import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-recomendacao-cultura',
  templateUrl: './tela-recomendacao-cultura.page.html',
  styleUrls: ['./tela-recomendacao-cultura.page.scss'],
})
export class TelaRecomendacaoCulturaPage implements OnInit {

  temperatura: any;
  lista_recomendacao_culturas: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.temperatura = this.activatedRoute.snapshot.paramMap.get('temperatura');
    this.lista_recomendacao_culturas = this.activatedRoute.snapshot.paramMap.get('lista_recomendacao_culturas');
  }

}
