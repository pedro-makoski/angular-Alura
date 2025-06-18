import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Contato } from "../componentes/contato/contato";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "ana@email.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", "email": "antonio@email.com"},
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    if(isPlatformBrowser(this.platformId )) {
      const contatosLocalStorageString = localStorage.getItem('contatos');
      const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
  
      this.contatos = contatosLocalStorage || this.contatos;
  
      this.saveAll() 
    }
  }

  saveAll() {
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }

  salvarContato(contato: Contato): void {
    this.contatos.push(contato);
    this.saveAll();
  }
}