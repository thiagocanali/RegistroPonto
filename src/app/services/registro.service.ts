// src/app/services/registro.service.ts
import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private registros: Registro[] = [];

  adicionarRegistro(registro: Registro) {
    this.registros.push(registro);
  }

  obterRegistros(): Registro[] {
    return this.registros;
  }
}
