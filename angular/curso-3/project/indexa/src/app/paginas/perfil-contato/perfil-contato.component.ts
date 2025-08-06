import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { SeparadorComponent } from "../../componentes/separador/separador.component";

@Component({
  selector: 'app-perfil-contato',
  imports: [ContainerComponent, RouterLink, SeparadorComponent],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {
  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
    avatar: ""
  }

  constructor(private activatedRoute: ActivatedRoute, private contatoService: ContatoService, public router: Router) { }

  getId(): number | null {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id) {
      return parseInt(id)
    }

    return null 
  }

  ngOnInit(): void {
    const id = this.getId()
    if(id) {
      this.contatoService.buscarContatoPorId(id).subscribe((contato) => {
        this.contato = contato
      })
    }
  }

  excluir() { 
    this.contatoService.excluirContato(this.contato.id).subscribe(() => {
      this.router.navigateByUrl("/lista-contatos")
    })
  }
}
