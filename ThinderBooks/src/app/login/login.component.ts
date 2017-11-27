import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {USUARIOS} from '../../assets/dados/usuario.dados';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];

  constructor() { }

  ngOnInit() {
    this.usuarios = USUARIOS;
  }
  login(e) {
    e.preventDefault();
    console.log(e);
    const usuario = e.target.elements[0];
    const senha = e.target.elements[1];
    console.log(usuario, senha);
    return false;
  }
}
