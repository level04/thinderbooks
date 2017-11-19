import { Component, OnInit, Input } from '@angular/core';
import { Livro } from './../livro';

@Component({
  selector: 'app-cartao-de-livro',
  templateUrl: './cartao-de-livro.component.html',
  styleUrls: ['./cartao-de-livro.component.css']
})
export class CartaoDeLivroComponent implements OnInit {

  @Input('livro') livro: Livro;
  constructor() { }

  ngOnInit() {
    let id = this.livro.id;
    let titulo = this.livro.titulo;

  }

}
