import { RouterLink, Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContatoService } from '../../services/contato.service';
import { MensagemErroComponent } from "../../componentes/mensagem-erro/mensagem-erro.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-formulario-contato',
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule, CommonModule, RouterLink, MensagemErroComponent, CabecalhoComponent],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  ngOnInit() {
      this.inicializarFormulario();
      this.carregarContato()
  }

  constructor(private contatoService: ContatoService, private router: Router, private activatedRoute: ActivatedRoute) { 
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('',   Validators.required),      
      email: new FormControl('', [Validators.required, Validators.email]),      
      aniversario: new FormControl(''),      
      redes: new FormControl(''),      
      observacoes: new FormControl(''),    
      avatar: new FormControl('', Validators.required)
    })
  }

  salvarContato() {
    if(this.contatoForm.valid) {  
      const novoContato = this.contatoForm.value;

      const id = this.getId() 
      novoContato.id = id

      this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
        this.contatoForm.reset();
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }

  obterControle(nome: string): FormControl {
    const control = this.contatoForm.get(nome)
    if(!control) {
      throw new Error("Controle de formulário não encontrado" + nome)
    }

    return control as FormControl
  }

  getId(): number | null {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id) {
      return parseInt(id)
    }

    return null 
  }

  carregarContato() {
    const id = this.getId()
    if(id) {
      this.contatoService.buscarContatoPorId(id).subscribe((contato) => {
        this.contatoForm.patchValue(contato)
      })
    }
  }

  cancelar() {
    this.contatoForm.reset()
    this.router.navigateByUrl('/lista-contatos')
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0]
    if(file) {
      this.lerArquivo(file)
    }
  }

  lerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.result) {
        this.contatoForm.get('avatar')?.setValue(reader.result)
      } 
    }
    reader.readAsDataURL(file)
  }
}
