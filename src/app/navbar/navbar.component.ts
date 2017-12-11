import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import { LoginComponent} from '../login/login.component';
import {$} from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;
  constructor(private usuarioLogado: LoginComponent) {
    this.usuario = usuarioLogado.usuarioAtual;
  }

  ngOnInit() {
  }

}
