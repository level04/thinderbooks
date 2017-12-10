import {Component, OnInit} from '@angular/core';
import {Livro} from '../livro';
// import {LIVROS} from '../../assets/dados/livro.dados';
import {Usuario} from '../usuario';
import {LoginComponent} from '../login/login.component';
import {DadosService} from '../services/dados.service';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})

export class EstanteComponent implements OnInit {

  todosOsLivros: Livro[];
  usuario: Usuario;
  resultadosDaBuscaGlobal: Livro[];
  resultadosDaBuscaDoUsuario: Livro[];
  livrosDoUsuario: Livro[];
  constructor(private login: LoginComponent, private dadosDeLivros: DadosService) {
    this.usuario = login.usuarioAtual;
  }
  ngOnInit() {
    this.dadosDeLivros.livrosBaixados.subscribe(livros => {
      this.todosOsLivros = livros;
      this.resultadosDaBuscaGlobal = this.todosOsLivros;
    });
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
