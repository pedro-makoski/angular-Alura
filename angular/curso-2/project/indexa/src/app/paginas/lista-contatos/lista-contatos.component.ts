import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';
import agenda from '../../agenda.json'
import { ContainerComponent } from '../../componentes/container/container.component';
import { RouterLink } from '@angular/router';

interface Contato {
  id: number
  nome: string
  telefone: string
} 

function removeAcentos(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

@Component({
  selector: 'app-lista-contatos',
  imports: [
      CabecalhoComponent, 
      SeparadorComponent, 
      ContatoComponent,
      FormsModule,
      ContainerComponent,
      RouterLink
    ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  letrasExibidas: string[] = []
  private _filtroPorTexto: string = ''

  ngOnInit() {
    this.setLetrasDoAlfabeto()
  }

  get filtroPorTexto(): string {
    return this._filtroPorTexto
  }

  set filtroPorTexto(valor: string) {
    this._filtroPorTexto = valor
    this.setLetrasDoAlfabeto()
  }


 
  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos
    }

    return this.contatos.filter(contato => {
      return removeAcentos(contato.nome.toLowerCase()).includes(removeAcentos(this.filtroPorTexto.toLowerCase()))
    })
  }

  public filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    })
  }

  public setLetrasDoAlfabeto(){
    const contatos = this.filtrarContatosPorTexto()
    const letras = new Set<string>()
    contatos.forEach(contato => {
      const letra = contato.nome.charAt(0).toLowerCase()
      letras.add(letra)
    }
    )
    this.letrasExibidas = Array.from(letras).sort()
  }
}
