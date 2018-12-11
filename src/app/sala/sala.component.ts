import { Bd } from './../bd.service';
import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})

@Injectable()
export class SalaComponent implements OnInit, OnDestroy {
  //public salas: Sala[] = SALAS_E
  categorias: Observable<any>
  
  constructor(private banco: Bd) {

  }

  ngOnInit() {
    this.categorias = this.banco.categorias
  }
  ngOnDestroy(): void {
  }
  
  exibir(): void {
    
  }
}
