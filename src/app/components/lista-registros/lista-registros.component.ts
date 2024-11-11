// src/app/components/lista-registros/lista-registros.component.ts
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { Registro } from '../../models/registro.model';

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {
  registros: Registro[] = [];

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registros = this.registroService.obterRegistros();
  }
}
