import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {USUARIOS} from '../../assets/dados/usuario.dados';
import {Router} from '@angular/router';
import {Livro} from '../livro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  usuarioAtual: Usuario = {
    'nome': 'Otávio',
    'sobrenome': 'Xavier Calaça',
    'email': 'otavio@gmail.com',
    'senha': '1234',
    'foto': 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAtgAAAAJDA5MzE2MDg5LTYxOGUtNDMzMi1iZTJhLTQwYTcwZDM5NjJlOQ.jpg',
    'livros': [
      '972-23-2755-0'
    ]
  };
  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarios = USUARIOS;
  }
  login(e) {
    e.preventDefault();
    this.router.navigate(['estante']);
  }
  addLivro(livro: Livro) {
    this.usuarioAtual.livros.push(livro.isbn);
  }
}
