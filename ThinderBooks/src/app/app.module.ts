import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstanteComponent } from './estante/estante.component';
import { CartaoDeLivroComponent } from './cartao-de-livro/cartao-de-livro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { MinhaEstanteComponent } from './minha-estante/minha-estante.component';

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
    MinhaEstanteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
  ],
  providers: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
