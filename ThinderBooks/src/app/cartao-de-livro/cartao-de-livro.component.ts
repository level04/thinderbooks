import {Component, Input, OnInit} from '@angular/core';
import {Livro} from '../livro';

@Component({
  selector: 'app-cartao-de-livro',
  templateUrl: './cartao-de-livro.component.html',
  styleUrls: ['./cartao-de-livro.component.css']
})
export class CartaoDeLivroComponent implements OnInit {

  @Input('livro') livro: Livro;

  // livro: Livro = {
  //   'id': 2,
  //   'titulo': 'Animais Fantásticos e Onde Habitam',
  //   'resumo': 'Animais Fantásticos e Onde Habitam é um livro escrito por J. K. Rowling sob o pseudônimo de Newt Scamander.',
  //   'escrito_por': 'J. K. Rowling',
  //   'genero': 'Literatura fantástica',
  //   'isbn': '972-23-2755-0',
  //   'capa': 'animais-fantasticos.jpg'
  // };
  constructor() {
  }

  ngOnInit() {
  }
}
