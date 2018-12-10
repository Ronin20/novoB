import { Ideia } from './ideia.model';

export class Categoria {
    constructor(
        public titulo: string,
        public ideias: Ideia[]
    ){}
}