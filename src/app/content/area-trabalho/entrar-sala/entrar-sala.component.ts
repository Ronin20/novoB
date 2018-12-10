import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entrar-sala',
  templateUrl: './entrar-sala.component.html',
  styleUrls: ['./entrar-sala.component.css']
})
export class EntrarSalaComponent implements OnInit {
  
  public form_entrar_sala: FormGroup = new FormGroup({
    'id': new FormControl(null)
  })

  constructor() { }

  ngOnInit() {
  }

}
