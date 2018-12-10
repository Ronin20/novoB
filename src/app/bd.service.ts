import * as firebase from 'firebase'

import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class Bd{
    constructor(private db: AngularFireDatabase){
       
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
        firebase.database().ref().child(`salas/${ideia.idSala}/${ideia.categoria}`)
            .push({
               titulo: ideia.ideia
            })
        console.log('Chegamos ate aqui')
    }

    delete(key: string) {
        this.db.object(`salas/${key}`).remove();
    }

    public adicionar_categoria(categoria: any): void{
        firebase.database().ref().child(`salas/${categoria.sala}/${categoria.nome}`)
            .push()
        console.log('Categoria adicionada')
        
    }


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

    getIdeas(idSala: string, cat: string): any {
        let ideas: any[] = []
        firebase.database().ref(`salas/${idSala}/${cat}`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    ideas.push(childSnapshot.val())
                })
            })
        return ideas
    }




    getCategorias(idSala: string): any{
        let cats: any[] = []
        
        firebase.database().ref(`salas/${idSala}`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    cats.push(childSnapshot.key)
                })
            })
        return cats
    }


    getAll(idSala: string) {
        return this.db.list(`salas/${idSala}`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

}