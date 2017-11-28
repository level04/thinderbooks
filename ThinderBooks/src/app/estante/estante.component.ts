import {Component, OnInit} from '@angular/core';
import {Livro} from '../livro';
import {LIVROS} from '../../assets/dados/livro.dados';
import {Usuario} from '../usuario';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})

export class EstanteComponent implements OnInit {
  todosOsLivros: Livro[];
  livrosDoUsuario: Livro[];
  resultadosDaBuscaGlobal: Livro[];
  resultadosDaBuscaDoUsuario: Livro[];
  usuario: Usuario;
  constructor(private login: LoginComponent) {
    this.usuario = login.usuarioAtual;
  }
  ngOnInit() {
    this.livrosDoUsuario = [];
    this.todosOsLivros = LIVROS;
    this.resultadosDaBuscaGlobal = this.todosOsLivros;
    this.usuario.livros.forEach(idDoLivro => {
      this.livrosDoUsuario.push(this.obterLivroPeloId(idDoLivro));
    });
    this.resultadosDaBuscaDoUsuario = this.livrosDoUsuario;
    console.log(this.todosOsLivros);
    console.log(this.usuario.livros);
    console.log(this.livrosDoUsuario);
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
  obterLivroPeloId(id: number): Livro {
    for (const livro of this.todosOsLivros) {
      if (id === livro.id) {
        return livro;
      }
    }
    return null;
  }
}
