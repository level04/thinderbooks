import {Component, Input, OnInit} from '@angular/core';
import {Livro} from '../livro';
import {DadosService} from '../services/dados.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-detalhes-de-livro',
  templateUrl: './detalhes-de-livro.component.html',
  styleUrls: ['./detalhes-de-livro.component.css']
})
export class DetalhesDeLivroComponent implements OnInit {

  livro: Livro;
  constructor(modalService: ModalService) {
    modalService.notifyObservable.subscribe(livro => {
      this.livro = livro
      console.log(livro)
    })
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.warn('Livro: ', this.livro);
  }

}
