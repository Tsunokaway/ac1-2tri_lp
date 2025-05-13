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
  temperatura = 0;
  lista_recomendacao_culturas = "";
  temperatura_range(event: RangeCustomEvent) {
    this.temperatura = parseInt(event.detail.value.toString())
  }

  confirmar() {
    if (this.temperatura)
      this.router.navigateByUrl
        (`/tela-recomendacao-cultura/${this.temperatura}`);
  }


}
