import { Autenticacao } from './../autenticacao.service';
import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bd } from '../bd.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()
export class HeaderComponent implements OnInit {
  token: any = localStorage.getItem('idToken')
  info: Observable<any>
  constructor(
      public router: Router,
      private autenticacao: Autenticacao,
      private banco: Bd
    
  ) { }

  ngOnInit() {
    this.info = this.banco.info
  }

  public sair(): void{
    this.autenticacao.sair()
  }


  public title: string = 'Brainstorming Rooms'
}
