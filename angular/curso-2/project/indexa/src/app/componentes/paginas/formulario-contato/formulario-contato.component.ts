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
      nome: new FormControl('Pedro Makoski'),
      telefone: new FormControl('99 9999-9999'),      
      email: new FormControl('pedro@gmail.com'),      
      aniversario: new FormControl(''),      
      redes: new FormControl('www.rantool.com'),      
      observacoes: new FormControl('Bom dia'),      
    })
  }

  salvarContato() {
    console.log(this.contatoForm.value);
  }

  cancelar() {
    console.log('Submissão Cancelada');
  }
}
