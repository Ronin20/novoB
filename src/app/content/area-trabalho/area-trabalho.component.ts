import { ItemSala } from './../../shared/item-sala.model';
import { SALAS } from './items-mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-trabalho',
  templateUrl: './area-trabalho.component.html',
  styleUrls: ['./area-trabalho.component.css']
})
export class AreaTrabalhoComponent implements OnInit {
  public salas: ItemSala[] = SALAS
  constructor() { }

  ngOnInit() {
  }

}
