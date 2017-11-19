import { Component, OnInit, ViewChild } from '@angular/core';
import { LivrosService } from './../services/livros.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-formulario-novo-livro',
  templateUrl: './formulario-novo-livro.component.html',
  styleUrls: ['./formulario-novo-livro.component.css']
})
export class FormularioNovoLivroComponent implements OnInit {

  @ViewChild('formularioDeNovoLivro') formularioDeNovoLivro: NgForm;

  constructor(public servicoDeLivros: LivrosService) {

   }

  ngOnInit() {
  }

  onEnviarNovoLivro(dados): void {
    this.servicoDeLivros.adicionarLivro(dados);
    this.formularioDeNovoLivro.reset();
  }
}
