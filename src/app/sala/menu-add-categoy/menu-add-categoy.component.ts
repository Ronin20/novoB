import { Bd } from './../../bd.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-add-categoy',
  templateUrl: './menu-add-categoy.component.html',
  styleUrls: ['./menu-add-categoy.component.css']
})
@Injectable()
export class MenuAddCategoyComponent implements OnInit {
  message_error: string = ''
  new_categoria: string
  /*public form_add_categoria: FormGroup = new FormGroup({
    'new_categoria': new FormControl(null)
  })*/
  
  constructor(
    private bd: Bd
  ) { }

  ngOnInit() {
  }


  public addCategoria(): void {
    if(this.new_categoria){
        this.bd.adicionar_categoria({
            nome: this.new_categoria,
            salaId: undefined
        })
        this.new_categoria = ''
        this.message_error = ''
    }else{
      this.message_error = '*Preencha o campo vazio'
    }
    }


}
