import { Categoria } from './categoria.model';

export class Sala {
    constructor(
        public id: string,
        public categorias: Categoria[],
        public admin: string
    ){}
}