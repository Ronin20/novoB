import { Categoria } from './../../shared/categoria.model';
import { SALAS_E } from './../../salas-mocks';
import { Bd } from './../../bd.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-add-idea',
  templateUrl: './menu-add-idea.component.html',
  styleUrls: ['./menu-add-idea.component.css']
})

@Injectable()
export class MenuAddIdeaComponent implements OnInit {
  
  //public salas: Sala[] = SALAS_E
  categorias: Observable<any>
  new_idea: string
  categoria: string
  message_error: string = ''
  /*
  public form_add_ideia: FormGroup = new FormGroup({
    'new_idea': new FormControl(null),
    'categoria': new FormControl(null)
  })*/

  constructor(
    private banco: Bd
  ) { }


  ngOnInit() {
    this.categorias = this.banco.getAll(this.banco.idSala)
  }

  public addIdeia(): void {
    if(!this.categoria || !this.new_idea){
      this.message_error = "*Preencha os campos vazios"
    }else{
      this.banco.adicionar_ideia({
        categoria: this.categoria,
        ideia: this.new_idea
      })
      this.categoria = ''
      this.new_idea = ''
      this.message_error = ''
    }
  }

}
