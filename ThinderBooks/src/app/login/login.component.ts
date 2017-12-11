import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';

import {Livro} from '../livro';
import {DadosService} from '../services/dados.service';
import {AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: AngularFirestoreCollection<Usuario>;
  usuarioAtual: Usuario = {
    'nome': 'Otávio',
    'sobrenome': 'Xavier Calaça',
    'email': 'otavio@gmail.com',
    'senha': '1234',
    'foto': 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAtgAAAAJDA5MzE2MDg5LTYxOGUtNDMzMi1iZTJhLTQwYTcwZDM5NjJlOQ.jpg',
    'livros': [
      '9781546678632'
    ]
  };
  constructor(private usuariosServico: DadosService) { }

  ngOnInit() {
    this.usuarios = this.usuariosServico.usuarios;
  }
  login(e) {
    console.log('cliuei');
    // this.router.navigate(['estante']);
  }
  addLivro(livro: Livro) {
    this.usuarioAtual.livros.push(livro.isbn);
  }
}
