import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Livro} from '../livro';
import {Usuario} from '../usuario';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

  listaDeLivros: AngularFirestoreCollection<Livro>;
  listaDeUsuarios: AngularFirestoreCollection<Usuario>;
  livros: Observable<Livro[]>;
  constructor(public angularFireStore: AngularFirestore) {
    this.livros = this.angularFireStore.collection('livros').valueChanges();
  }
}
