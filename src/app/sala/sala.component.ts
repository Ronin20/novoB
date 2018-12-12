import { Bd } from './../bd.service';
import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase'
@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})

@Injectable()
export class SalaComponent implements OnInit, OnDestroy {
  //public salas: Sala[] = SALAS_E
  categorias: Observable<any>
  user_email: string
  admin_email: string
  constructor(private banco: Bd) {

  }

  ngOnInit() {
    this.categorias = this.banco.categorias
    this.admin_email = this.banco.administrador
    firebase.auth().onAuthStateChanged((user) => {
      this.user_email = user.email
    })
  }
  
  ngOnDestroy(): void {
  }
  
  exibir(): void {
    console.log(this.user_email)
    console.log(this.admin_email)
  }
}
