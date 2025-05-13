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
  temperatura = 0;
  lista_recomendacao_culturas = "";
  //valor do ion-range:
  temperatura_range(event: RangeCustomEvent) {
    this.temperatura = parseInt(event.detail.value.toString())
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
    if (this.temperatura) {

    } else if (this.temperatura) { }
    this.router.navigateByUrl
      (`/tela-recomendacao-cultura/${this.temperatura}`);
  }


}
