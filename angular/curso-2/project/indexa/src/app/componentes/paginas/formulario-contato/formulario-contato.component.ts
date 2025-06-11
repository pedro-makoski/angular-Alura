import { Component } from '@angular/core';
import { ContainerComponent } from "../../container/container.component";
import { SeparadorComponent } from '../../separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;
  
  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl(''),
      telefone: new FormControl(''),      
      email: new FormControl(''),      
      aniversario: new FormControl(''),      
      redes: new FormControl(''),      
      observacoes: new FormControl(''),      
    })
  }
}
