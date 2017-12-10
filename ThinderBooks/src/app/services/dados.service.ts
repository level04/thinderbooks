import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Livro} from '../livro';
import {Usuario} from '../usuario';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

  listaDeLivros: AngularFirestoreCollection<Livro>;
  livrosBaixados: Observable<Livro[]>;
  constructor(public angularFirestore: AngularFirestore) {
    this.listaDeLivros = this.angularFirestore.collection('livros');
    this.livrosBaixados = this.listaDeLivros.valueChanges();
  }
  baixarLivros() {
    return this.livrosBaixados;
  }
  adicionarLivro(novoLivro: Livro) {
    this.listaDeLivros.add(novoLivro);
  }
}

