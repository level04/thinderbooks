import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Livro} from '../livro';
import {Usuario} from '../usuario';
import {LoginComponent} from '../login/login.component';
import {DadosService} from '../services/dados.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})

export class EstanteComponent implements OnInit, AfterViewInit {

  todosOsLivros: Livro[];
  books: any;
  usuario: Usuario;
  resultadosDaBuscaGlobal: Livro[];
  resultadosDaBuscaDoUsuario: Livro[];
  livrosDoUsuario: Livro[];
  livroSelecionado: Livro;
  constructor(
	  private login: LoginComponent, 
	  private dadosDeLivros: DadosService, 
	  private http: HttpClient,
	  private router: Router
	) {
    this.usuario = login.usuarioAtual;
	this.livrosDoUsuario = [];
	this.http.get("http://localhost:8080/api/books").subscribe(livros => {
		this.books = livros;
	})


  }
  ngOnInit() {
	

	debugger


    this.dadosDeLivros.livrosBaixados.subscribe(livros => {
      this.todosOsLivros = livros;
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

  editarLivro(livro) {
	this.router.navigate(['edit', JSON.stringify(livro)]);
  }

  removerLivro(livro){
	  debugger;
	  this.http.patch("http://localhost:8080/api/books", livro, {headers: new HttpHeaders()
	  .set('Content-Type', 'application/json')}).subscribe(_ => {})
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
    this.livroSelecionado = livro;
  }
  excluirLivro(livro: Livro) {
    this.dadosDeLivros.excluirLivro(livro);
  }
}
