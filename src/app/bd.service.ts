import * as firebase from 'firebase'

import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Bd implements OnInit{
    

    idSala: string = localStorage.getItem('idSalaLocal')
    cats: any[] 
    administrador: string
    categorias: Observable<any>
    info: Observable<any>
    
    constructor(private db: AngularFireDatabase){
        this.idSala = localStorage.getItem('idSalaLocal')
        this.categorias = this.getAll(localStorage.getItem('idSalaLocal'))
        this.cats = this.getCategorias()
        this.info = this.getAllInfo()
        
    }

    ngOnInit() {
        this.administrador = this.getAdmin()
    }
    //---------------------------------------------------------------
    public criar_sala(sala: any): void {
        this.adicionar_categoria({nome: 'Vamos começar', salaId: sala.id})
        firebase.database().ref(`salas/${sala.id}/info`)
            .push({ id: sala.id,
                tema: sala.tema,
                qtd_membros: sala.qtd_membros,
                admin: sala.email
        })
        console.log(sala)
    }

    public adicionar_ideia(ideia: any): void{
        firebase.database().ref().child(`salas/${this.idSala}/categorias/${ideia.categoria}`)
            .push({
               titulo: ideia.ideia
            })
    }

    public carregarSala(sala: string){
        localStorage.setItem('idSalaLocal', sala)
        this.idSala = localStorage.getItem('idSalaLocal')
        
    }

    public adicionar_categoria(categoria: any): void{
        
        let id: string
        if(categoria.salaId == undefined)
            id = this.idSala
        else
            id = categoria.salaId
        firebase.database().ref().child(`salas/${id}/categorias/${categoria.nome}`)
            .push({
                titulo: ''
            })
        this.cats = this.getCategorias()
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


    buscaCategoria(indice: number){
        let todas_categorias: any = this.getCategorias()
        console.log(todas_categorias[indice])
        return todas_categorias[indice]
    }

    getCategorias(): any{
        let cats: any[] = []
       
        firebase.database().ref(`salas/${this.idSala}/categorias`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    cats.push(childSnapshot.key)
                })
            })
        return cats
    }
    
    getAllIdeas(cat: string) { 
        return this.db.list(`salas/${this.idSala}/categorias/${cat}`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

    getAll(cat: string) { 
        return this.db.list(`salas/${this.idSala}/categorias`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

    getAllInfo() { 
        return this.db.list(`salas/${this.idSala}/info`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

    getAdmin(): string{
        let admin
        this.info.forEach(nivel1 => {
            nivel1.forEach(nivel2 =>{
                admin = nivel2.admin
            })
        })
        console.log('nivel2: ', admin)
                
        return admin
    }

}