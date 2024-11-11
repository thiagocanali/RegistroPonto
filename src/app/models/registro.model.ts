// src/app/models/registro.model.ts
export class Registro {
    constructor(
      public funcionario: string,
      public data: string,
      public horas: string,
      public tipo: string,
      public anotacao: string
    ) {}
  }
  