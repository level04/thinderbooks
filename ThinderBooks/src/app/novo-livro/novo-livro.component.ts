import { Component, OnInit } from '@angular/core';
import {DadosService} from '../services/dados.service';
import {Livro} from '../livro';
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-novo-livro',
  templateUrl: './novo-livro.component.html',
  styleUrls: ['./novo-livro.component.css']
})
export class NovoLivroComponent implements OnInit {
  novoLivro: Livro = {
    titulo: '',
    resumo: '',
    escrito_por: '',
    genero: '',
    isbn: '',
    capa: ''
  };
  constructor(private livroService: DadosService, private usuario: LoginComponent) { }

  ngOnInit() {
  }
  onSubmit() {
      this.livroService.adicionarLivro(this.novoLivro);
      this.usuario.addLivro(this.novoLivro);
  }
}
