import { Bd } from './../../../bd.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as firebase from 'firebase'
@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.css']
})
export class CriarSalaComponent implements OnInit {

  public email: string


  public form_criar_sala: FormGroup = new FormGroup({
    'tema': new FormControl(null),
    'qtd_membros': new FormControl(null)
  })



  constructor(
    private bd: Bd
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public criar_sala(): void {
    let id_sala: string = this.getRandomInt(100, 999) //VALIDAR ISSO AQUI PRA NAO GERAR REPETIDOS
    this.bd.criar_sala({
        id: id_sala,
        tema: this.form_criar_sala.value.tema,
        qtd_membros: this.form_criar_sala.value.qtd_membros,
        email: this.email
    })
  }

  public getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return String(Math.floor(Math.random() * (max - min)) + min);
  }

}
