import { Autenticacao } from './../autenticacao.service';
import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private autenticacao: Autenticacao) { }

  ngOnInit() {
  }

  public sair(): void{
    this.autenticacao.sair()
  }


  public title: string = 'Brainstorming Rooms'
}
