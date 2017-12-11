import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Livro} from '../livro';

@Component({
  selector: 'app-cartao-de-livro-usuario',
  templateUrl: './cartao-de-livro-usuario.component.html',
  styleUrls: ['./cartao-de-livro-usuario.component.css']
})
export class CartaoDeLivroUsuarioComponent implements OnInit {

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
