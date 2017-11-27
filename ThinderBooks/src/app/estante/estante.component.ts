import {Component, OnInit} from '@angular/core';
import {Livro} from '../livro';
import {LIVROS} from '../../assets/dados/livro.dados';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})

export class EstanteComponent implements OnInit {
  livros: Livro[];
  constructor() {
  }
  ngOnInit() {
    this.livros = LIVROS;
    console.log(this.livros);
  }

}
