import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstanteComponent } from './estante/estante.component';
import { CartaoDeLivroComponent } from './cartao-de-livro/cartao-de-livro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { MinhaEstanteComponent } from './minha-estante/minha-estante.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import {DadosService} from './services/dados.service';
import { NovoLivroComponent } from './novo-livro/novo-livro.component';
import {FormsModule} from '@angular/forms';

const rotas = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'estante',
    component: EstanteComponent
  },
  {
    path: 'minhaestante',
    component: MinhaEstanteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EstanteComponent,
    CartaoDeLivroComponent,
    NavbarComponent,
    LoginComponent,
    MinhaEstanteComponent,
    NovoLivroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    AngularFireModule.initializeApp(environment.firebase, 'thinderbooks'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    LoginComponent,
    DadosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
