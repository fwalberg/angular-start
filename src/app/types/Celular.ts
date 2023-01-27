export interface Celular {
  id: number;
  nome: string;
  descricao?: string; // ? indicar que a property é opcional.
  esgotado: boolean;
}
