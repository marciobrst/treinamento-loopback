import {Entity, model, property} from '@loopback/repository';

@model()
export class Aluno extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  codigo?: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;


  constructor(data?: Partial<Aluno>) {
    super(data);
  }
}

export interface AlunoRelations {
  // describe navigational properties here
}

export type AlunoWithRelations = Aluno & AlunoRelations;
