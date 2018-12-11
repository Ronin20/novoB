import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Bd } from './../../bd.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
@Injectable()
export class CategoriaComponent implements OnInit {
  @Input() public iR: number
  titulo: string
  ideias: Observable<any>
  lista_categorias: any

  constructor(private banco: Bd) { }

  ngOnInit() {
    this.ideias = this.banco.getAllIdeas(this.banco.cats[this.iR])
    this.titulo = this.banco.cats[this.iR]
  }

}
