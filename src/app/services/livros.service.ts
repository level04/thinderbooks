import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Subject } from 'rxjs/Subject'
//import { livros } from './../dados/ilvros.json';
import 'rxjs/add/operator/map';

@Injectable()
export class LivrosService {

  public novoLivroSubject = new Subject<any>();

  constructor(private http: Http) { }

  carregarLivros() {

    return this.http.get('dados/livros.json')
    .map(res => res.json())
  }

  adicionarLivro(dados) {

    dados.capa = 'imagem-padrao.jpg';
    this.novoLivroSubject.next(dados);


  }

}
