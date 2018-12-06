import { Autenticacao } from './../../autenticacao.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //public exibirLogin: EventEmitter<string> = new EventEmitter<string>()


  public form_cadastro: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'senha': new FormControl(null)
  })

  
  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }
  
  /*public exibirLogin(): void {
    this.exibirLogin.emit('login')
  }*/

  public cadastrarUsuario(): void {
    
    console.log(this.form_cadastro)
    let usuario: Usuario = new Usuario(
      this.form_cadastro.value.email,
      this.form_cadastro.value.nome_completo,
      this.form_cadastro.value.senha
    )
    console.log(usuario)
    this.autenticacao.cadastrarUsuario(usuario)
  }

}
