import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, filter, map, of, Subscription, switchMap, throwError } from 'rxjs';
import { Item, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {
  campoBusca: FormControl = new FormControl()
  menssagemErro: string = ''
  subscription: Subscription
  livrosResultado!: LivrosResultado

  constructor(private livroService: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(PAUSA),
      filter((valorDigitado) => valorDigitado.length >= 3),
      distinctUntilChanged(),
      switchMap(valorDigitado => this.livroService.buscar(valorDigitado)),
      map(resultado => this.livrosResultado = resultado),
      catchError(erro => {
        this.menssagemErro = "Ops, ocorreu um erro, Recarregue a aplicação!"
        return of()
      })
    )

  livrosResultadoParaLivros(items: any[]): LivroVolumeInfo[] {
      return items.map(item => {
        return new LivroVolumeInfo(item)
      })
  }
}



