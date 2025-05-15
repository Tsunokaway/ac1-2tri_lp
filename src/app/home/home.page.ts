import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(public router: Router) { }
  //definindo as variáveis
  temperatura1 = 0;
  temperatura2 = 0;
  temperatura3 = 0;
  temperatura4 = 0;
  res = '';
  lista_recomendacao_culturas = "";
  //valor do ion-range:
  temperatura_range1(event: RangeCustomEvent) {
    this.temperatura1 = parseInt(event.detail.value.toString())
  }
  temperatura_range2(event: RangeCustomEvent) {
    this.temperatura2 = parseInt(event.detail.value.toString())
  }
  temperatura_range3(event: RangeCustomEvent) {
    this.temperatura3 = parseInt(event.detail.value.toString())
  }
  temperatura_range4(event: RangeCustomEvent) {
    this.temperatura4 = parseInt(event.detail.value.toString())
  }

  /*
    *Condições das culturas:*
    Morangos - 15°C e 25°C
    Uvas - 20°C 30°C
    Laranjas - 15°C e 30°C
    Mirtilos - 0°C e 10°C
    Maçãs - 15°C e 25°C
    Ameixas - 15°C e 25°C
    Acerola - 20°C e 35°C
    Figos - 20°C e 30°C
    Romã - 25°C e 35°C
    Peras - 15°C e 25°C
   */


  //função do botão que encaminha para outra tela
  confirmar() {
    let media_temperatura = (this.temperatura1+this.temperatura2+this.temperatura3+this.temperatura4)/4
    let recomedadas = [''];
    switch(true){
      case media_temperatura >= 15 && media_temperatura <= 25:
      recomendadas.push('Morangos, Maçãs, Ameixas, Peras')
      break;
    }switch(true){
      case media_temperatura >= 20 && media_temperatura <= 30:
      recomendadas.push('Uvas, Figos, Laranjas')
      break;
    }switch(true){
      case media_temperatura >= 0 && media_temperatura <= 10:
      recomendadas.push('Mirtilos')
      break;
    }switch(true){
      case media_temperatura >= 20 && media_temperatura <= 35:
      recomendadas.push('Acerola')
      break;
    }

    if(recomendadas.lenght > 0){
      this.res = 'Culturas recomendadas:' + recomendadas.join(',')
    }else{
      this.res = 'Não há culturas recomendadas para essa média.'
    }


    this.router.navigateByUrl
      (`/tela-recomendacao-cultura/${this.temperatura}`);
  }


}
