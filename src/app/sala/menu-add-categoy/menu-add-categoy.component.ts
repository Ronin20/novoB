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

  
  public form_add_categoria: FormGroup = new FormGroup({
    'new_categoria': new FormControl(null)
  })
  
  constructor(
    private bd: Bd
  ) { }

  ngOnInit() {
  }


  public addCategoria(): void {
    
    this.bd.adicionar_categoria({
      nome: this.form_add_categoria.value.new_categoria
    })
  }


}
