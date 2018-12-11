import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bd } from 'src/app/bd.service';

@Component({
  selector: 'app-entrar-sala',
  templateUrl: './entrar-sala.component.html',
  styleUrls: ['./entrar-sala.component.css']
})

@Injectable()
export class EntrarSalaComponent implements OnInit {
  
  public form_entrar_sala: FormGroup = new FormGroup({
    'id': new FormControl(null)
  })

  constructor(
    private banco: Bd,
    private router: Router
    ) 
  { }

  ngOnInit() {
  }

  entrarSala():void{
    this.banco.carregarSala(this.form_entrar_sala.value.id)
    this.router.navigate(['/sala'])
    this.refresh()
  }
  
  refresh(): void {
    window.location.reload();
  }

}
