import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Livro} from '../livro';

@Component({
  selector: 'app-cartao-de-livro',
  templateUrl: './cartao-de-livro.component.html',
  styleUrls: ['./cartao-de-livro.component.css']
})
export class CartaoDeLivroComponent implements OnInit {

  @Input('livro') livro: Livro;
  @Output() eventoVisualizarClicado = new EventEmitter<Livro>();
  @Output() eventoApagarClicado = new EventEmitter<Livro>();
  constructor() {
  }

  ngOnInit() {
  }
  visualizarLivro() {
    this.eventoVisualizarClicado.emit(this.livro);
  }
  apagarLivro() {
    console.log('apagarLivro');
    this.eventoApagarClicado.emit(this.livro);
  }
}
