import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Livro } from '../livro';

@Injectable()
export class ModalService {

  notifyObservable = this.notify.asObservable();

  constructor(private notify: Subject<Livro>) { 
    notify = new Subject();

  }

  emit(livro: Livro){
    console.log(livro)
    this.notify.next(livro)
  }

}
