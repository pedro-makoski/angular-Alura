import { Component } from '@angular/core';
import { ContainerComponent } from "../../container/container.component";
import { SeparadorComponent } from '../../separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-contato',
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;
  
  constructor() {
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
      console.log(this.contatoForm.value);
    }
  }

  cancelar() {
    console.log('Submissão Cancelada');
  }
}
