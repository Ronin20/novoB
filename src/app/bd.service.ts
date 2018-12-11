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
    cats: any[] 
    ideias: any[]
    categorias: Observable<any>
    constructor(private db: AngularFireDatabase){
        this.cats = this.getCategorias()
        this.categorias = this.getAll()
        this.return_ideas()
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

/*
    public atualiza_dados(sala: string): any{
        console.log('Entramos aqui mlk')
        firebase.database().ref(`salas/${sala}`)
            .once('value')
            .then((snapshot) => {
                
                console.log('SNAPHOT COMPLETO: ', snapshot)
                let snap = snapshot.val()
                console.log('teste: ', snap.titulo)
                snapshot.forEach((childSnapshot: any) => {
                    console.log(childSnapshot.val().key())
                    
                })
                
            })
    }
    
    public add_categoria(): void {

    }
    */
    public teste(): any {
        /*console.log('FUNÇÃO TESTE')
        var salas = firebase.database().ref('salas/' + '944');
        salas.on('value', function(snapshot) {
            console.log(this.snapshotToArray(snapshot))
            //updateStarCount(postElement, snapshot.val());
        });*/
    }

    /*getNumberChildrens(idSala: string) {
        return ref.child("messages").on("value", function(snapshot) {
            console.log("There are "+snapshot.numChildren()+" messages");
          })
    }*/

    return_ideas(): void{
        console.log('aqui eh o cats: ', this.cats)
        this.cats.forEach(this.push_i)
    }

    push_i(i: any): any{
        this.ideias.push(this.get_i(i))
    }

    get_i(i: any): any{
        return this.getIdeas(i).titulo
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