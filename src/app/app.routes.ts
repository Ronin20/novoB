import { SalaComponent } from './sala/sala.component';
import { AutenticacaoGuard } from './autenticacao-guard.service';
import { LoginComponent } from './content/login/login.component';
import { CadastroComponent } from './content/cadastro/cadastro.component';
import { AreaTrabalhoComponent } from './content/area-trabalho/area-trabalho.component';
import { ContentComponent } from './content/content.component';
import { Routes } from '@angular/router'
import { CriarSalaComponent } from './content/area-trabalho/criar-sala/criar-sala.component';
import { EntrarSalaComponent } from './content/area-trabalho/entrar-sala/entrar-sala.component';

export const ROUTES: Routes = [
    { path: '', component: ContentComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'login', component: LoginComponent},
    { path: 'area-trabalho', component: AreaTrabalhoComponent , canActivate: [ AutenticacaoGuard ]},
    { path: 'criar-sala', component: CriarSalaComponent, canActivate: [ AutenticacaoGuard ] },
    { path: 'entrar-sala', component: EntrarSalaComponent, canActivate: [ AutenticacaoGuard ]},
    { path: 'sala', component: SalaComponent }
]