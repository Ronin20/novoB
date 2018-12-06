import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.css']
})
export class CriarSalaComponent implements OnInit {

  public form_criar_sala: FormGroup = new FormGroup({
    'tema': new FormControl(null),
    'qtd_membros': new FormControl(null)
  })



  constructor() { }

  ngOnInit() {
  }

}
