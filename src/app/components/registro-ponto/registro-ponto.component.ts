// src/app/components/registro-ponto/registro-ponto.component.ts
import { Component } from '@angular/core';
import { Registro } from '../../models/registro.model';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro-ponto',
  templateUrl: './registro-ponto.component.html',
  styleUrls: ['./registro-ponto.component.css']
})
export class RegistroPontoComponent {
  funcionario = '';
  data = '';
  horas = '';
  tipo = '';
  anotacao = '';

  constructor(private registroService: RegistroService) {}

  onGravar() {
    const novoRegistro = new Registro(this.funcionario, this.data, this.horas, this.tipo, this.anotacao);
    this.registroService.adicionarRegistro(novoRegistro);
  }
}
