import { Autenticacao } from './../../autenticacao.service';
import { Usuario } from './../usuario.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message: string = ''
  public form_login: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  }) 

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public autenticar(): void {
      console.log(this.form_login)
      this.autenticacao.autenticar(
        this.form_login.value.email, 
        this.form_login.value.senha
      )  
  }

}
