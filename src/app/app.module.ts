import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CartaoDeLivroComponent } from './cartao-de-livro/cartao-de-livro.component';
import { EstanteDeLivrosComponent } from './estante-de-livros/estante-de-livros.component';
import { FormularioNovoLivroComponent } from './formulario-novo-livro/formulario-novo-livro.component';

import { LivrosService } from './services/livros.service';

@NgModule({
  declarations: [
    AppComponent,
    CartaoDeLivroComponent,
    EstanteDeLivrosComponent,
    FormularioNovoLivroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
