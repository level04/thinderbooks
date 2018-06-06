import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Usuario } from '../usuario';
import { LoginComponent } from '../login/login.component';
import { DadosService } from '../services/dados.service';
import { DetalhesDeLivroComponent } from '../detalhes-de-livro/detalhes-de-livro.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})

export class EstanteComponent implements OnInit, AfterViewInit {

  todosOsLivros: Livro[];
  usuario: Usuario;
  resultadosDaBuscaGlobal: Livro[];
  resultadosDaBuscaDoUsuario: Livro[];
  livrosDoUsuario: Livro[];
  livroSelecionado: boolean = false;
  constructor(private login: LoginComponent, private dadosDeLivros: DadosService, private modalService: ModalService) {
    this.usuario = login.usuarioAtual;
    this.livrosDoUsuario = [];
  }
  ngOnInit() {
    this.dadosDeLivros.livrosBaixados.subscribe(livros => {
      this.todosOsLivros = livros;
      console.log(this.todosOsLivros)
      this.resultadosDaBuscaGlobal = this.todosOsLivros;

      this.livrosDoUsuario = [];
      this.usuario.livros.forEach(isbnDoLivro => {
        this.livrosDoUsuario.push(this.obterLivroPeloIsbn(isbnDoLivro));
      });
      this.resultadosDaBuscaDoUsuario = this.livrosDoUsuario;
    });
  }
  ngAfterViewInit() {
    // $('.modal').modal();
    // $('ul.tabs').tabs();
    // $('.dropdown-button').dropdown();
  }

  filtroGlobal(termo: string) {
    termo = termo.toLowerCase();
    this.resultadosDaBuscaGlobal = this.todosOsLivros;
    this.resultadosDaBuscaGlobal = this.resultadosDaBuscaGlobal.filter(livro => {
      return livro.titulo.toLowerCase().includes(termo);
    });
  }

  filtroDoUsuario(termo: string) {
    termo = termo.toLowerCase();
    this.resultadosDaBuscaDoUsuario = this.livrosDoUsuario;
    this.resultadosDaBuscaDoUsuario = this.resultadosDaBuscaDoUsuario.filter(livro => {
      return livro.titulo.toLowerCase().includes(termo);
    });
  }
  obterLivroPeloIsbn(isbn: string): Livro {
    for (const livro of this.todosOsLivros) {
      if (isbn === livro.isbn) {
        return livro;
      }
    }
    return null;
  }

  livroModal(livro: Livro) {
    this.modalService.emit(livro);
    this.livroSelecionado = true;
  }
  
  excluirLivro(livro: Livro) {
    this.dadosDeLivros.excluirLivro(livro);
  }
}
