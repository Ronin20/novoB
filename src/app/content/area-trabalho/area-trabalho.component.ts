import { ItemSala } from './../../shared/item-sala.model';
import { SALAS } from './items-mocks';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bd } from 'src/app/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-trabalho',
  templateUrl: './area-trabalho.component.html',
  styleUrls: ['./area-trabalho.component.css']
})
@Injectable()
export class AreaTrabalhoComponent implements OnInit {
  public salas2: ItemSala[] = SALAS
  salas: Observable<any>
  //info: Observable<any>
  //keySala: string

  constructor(
    private banco: Bd,
    private router: Router
  ) { }

  ngOnInit() {
    this.salas = this.banco.salas
    //this.info = this.banco.info
  }

  entrarEmSala(){
    console.log('entrou aqui')
    //console.log('sala', this.keySala)
    this.banco.carregarSala('460')
    this.router.navigate(['/sala'])
    this.refresh()
  }

  exibir(){
    //console.log(this.keySala)
  }

  refresh(): void {
    window.location.reload();
  }
}
