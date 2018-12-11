import { Usuario } from './content/usuario.model';
import * as firebase from 'firebase'
import { send } from 'q';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'



@Injectable()
export class Autenticacao{
    
    public token_id: string
    
    constructor(private router: Router){

    }


    public cadastrarUsuario(usuario: Usuario): void {
        //console.log('Chegamos ate o seviço', usuario)
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                //Removendo o atributo senha do usuario antes de enviar pro database
                delete usuario.senha
                // Registrando os dados do usuario
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
                alert('Usuário cadastrado com sucesso')
                this.router.navigate(['/login'])
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }

    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        console.log('Deu')
                        this.token_id = idToken
                        localStorage.setItem('idToken', idToken)
                        this.router.navigate(['/area-trabalho'])
                    })    
            })
            .catch((error: Error) => {
                alert('Falha na autenticação')
            })
    }

    public autenticado(): boolean {
        if(this.token_id === undefined && localStorage.getItem('idToken') != null){
            this.token_id = localStorage.getItem('idToken')
        }

        if(this.token_id === undefined){
            this.router.navigate(['/'])
        }

        return (this.token_id !== undefined)
    }

    public sair(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
                this.token_id = undefined
                this.router.navigate(['/login'])
            })
    }
}