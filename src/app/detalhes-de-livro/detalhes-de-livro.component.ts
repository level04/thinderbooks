import {Component, Input, OnInit} from '@angular/core';
import {Livro} from '../livro';
import {DadosService} from '../services/dados.service';

@Component({
  selector: 'app-detalhes-de-livro',
  templateUrl: './detalhes-de-livro.component.html',
  styleUrls: ['./detalhes-de-livro.component.css']
})
export class DetalhesDeLivroComponent implements OnInit {

  @Input('livro') livro: Livro;
  constructor() {
  }

  ngOnInit() {
  }

}
