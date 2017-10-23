import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroUsuarioComponent } from './cadastroUsuario/cadastroUsuario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ListagemUsuarioComponent } from './listagemUsuario/listagemUsuario.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ContaUsuarioComponent } from './contaUsuario/contaUsuario.component';

const appRoutes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: 'contaUsuario', component: ContaUsuarioComponent },
    { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
    { path: 'cadastroUsuario/:id', component: CadastroUsuarioComponent },
    { path: '**', component: MenuComponent }
];

export const routing = RouterModule.forRoot(appRoutes);