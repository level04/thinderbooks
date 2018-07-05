import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Livro} from '../livro';
import {Usuario} from '../usuario';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DadosService {

  listaDeLivros: AngularFirestoreCollection<Livro>;
  livrosBaixados: Observable<Livro[]>;
  livroDoc: AngularFirestoreDocument<Livro>;
  usuarios: AngularFirestoreCollection<Usuario>;
  constructor(public angularFirestore: AngularFirestore, private http: HttpClient) {
    this.listaDeLivros = this.angularFirestore.collection('livros');
    this.livrosBaixados = this.listaDeLivros.snapshotChanges().map(changes => {
      return changes.map(a => {
        const dado = a.payload.doc.data() as Livro;
        dado.id = a.payload.doc.id;
        return dado;
      });
    });
    this.usuarios = this.angularFirestore.collection('usuarios');
  }


  baixarLivros() {
    return this.livrosBaixados;
  }

  editarLivro(livro) {
    let body = livro;

    return this.http.put('http://localhost:8080/api/books/', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  adicionarLivro(novoLivro) {
    debugger
    let body = novoLivro;

    return this.http.post("http://localhost:8080/api/books/", body, {headers: new HttpHeaders()
          .set('Content-Type', 'application/json')})
    
  }
  excluirLivro(livro: Livro) {
    this.livroDoc = this.angularFirestore.doc(`livros/${livro.id}`);
    console.log(this.livroDoc);
    this.livroDoc.delete();
  }
}

