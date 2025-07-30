import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';

@Component({
  selector: 'app-root',
  imports: [
    ListaContatosComponent,
    FormularioContatoComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
  