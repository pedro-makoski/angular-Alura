import { RouterLink, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  ngOnInit() {
      this.inicializarFormulario();
  }

  constructor(private contatoService: ContatoService, private router: Router) { 
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('',   Validators.required),      
      email: new FormControl('', [Validators.required, Validators.email]),      
      aniversario: new FormControl(''),      
      redes: new FormControl(''),      
      observacoes: new FormControl(''),    
    })
  }

  salvarContato() {
    if(this.contatoForm.valid) {
      const novoContato = this.contatoForm.value;
      this.contatoService.salvarContato(novoContato);
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    }
  }

  cancelar() {
    this.contatoForm.reset()
  }
}
