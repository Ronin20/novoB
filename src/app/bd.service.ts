import * as firebase from 'firebase'

import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Bd{

    idSala: string = localStorage.getItem('idSalaLocal')
    cats: any[] = this.getCategorias()
    ideias: any[]
    categorias: Observable<any>
    ideias2: Observable<any>

    ideias3: any[]

    constructor(private db: AngularFireDatabase){
        
        this.categorias = this.getAll()
        this.ideias2 = this.getAllIdeas('Categoria 1')
    }
    //---------------------------------------------------------------
    public criar_sala(sala: any): void {
        firebase.database().ref(`salas/${sala.id}`)
            .push({ id: sala.id,
                    tema: sala.tema,
                    qtd_membros: sala.qtd_membros,
                    admin: sala.email
            })
        console.log(sala)
        console.log('Aqui, criamos a sala')
    }

    public adicionar_ideia(ideia: any): void{
        firebase.database().ref().child(`salas/${this.idSala}/${ideia.categoria}`)
            .push({
               titulo: ideia.ideia
            })
    }


    public carregarSala(sala: string){
        this.idSala = sala
        localStorage.setItem('idSalaLocal', sala)
    }

    public adicionar_categoria(categoria: any): void{
        firebase.database().ref().child(`salas/${this.idSala}/${categoria.nome}`)
            .push({
                titulo: ''
            })
    }

    getIdeas(cat: string): any {
        let ideas: any[] = []
        firebase.database().ref(`salas/${this.idSala}/${cat}`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    ideas.push(childSnapshot.val())
                })
            })
        return ideas
    }

    getCategorias(): any{
        let cats: any[] = []
        
        firebase.database().ref(`salas/${this.idSala}`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    cats.push(childSnapshot.key)
                })
            })
        return cats
    }
    
    getAllIdeas3() { 
        console.log('oi')
        //for(let i = 0;i < this.cats.length;i++){
            //console.log(this.cats[i])
        this.ideias2 = this.getAllIdeas(this.cats[0])
        console.log(this.ideias2)
        //}
        //console.log(this.ideias3)
    }

   /* getAllIdeas2(cat: string) {
        console.log('CAT EH: ', cat) 
        this.ideias3.push(this.getAllIdeas(cat))
    }*/

    getAllIdeas(cat: string) { 
        return this.db.list(`salas/${this.idSala}/${cat}`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

    getAll() { 
        return this.db.list(`salas/${this.idSala}`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

}