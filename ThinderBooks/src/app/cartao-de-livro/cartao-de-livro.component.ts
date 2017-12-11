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
  constructor() {
  }

  ngOnInit() {
  }
  visualizarLivro() {
    this.eventoVisualizarClicado.emit(this.livro);
    console.log('Visualizar livro');
    console.log(JSON.stringify(this.livro));
  }
}
