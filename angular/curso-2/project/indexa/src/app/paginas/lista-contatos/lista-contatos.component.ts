import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../componentes/container/container.component';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../componentes/contato/contato';

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
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];

  letrasExibidas: string[] = []

  constructor(private contatoService: ContatoService) {}

  private _filtroPorTexto: string = ''

  ngOnInit() {
    this.contatos = this.contatoService.obterContatos()
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
      return removeAcentos(contato.nome.toLowerCase()).startsWith(letra)
    })
  }

  public setLetrasDoAlfabeto(){
    const contatos = this.filtrarContatosPorTexto()
    const letras = new Set<string>()
    contatos.forEach(contato => {
      const letra = contato.nome.charAt(0).toLowerCase()
      letras.add(removeAcentos(letra))
    }
    )
    this.letrasExibidas = Array.from(letras).sort()
  }
}
