import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LivrosService } from './../services/livros.service';

// import { livros } from './../dados/livros';

@Component({
  selector: 'app-estante-de-livros',
  templateUrl: './estante-de-livros.component.html',
  styleUrls: ['./estante-de-livros.component.css']
})
export class EstanteDeLivrosComponent implements OnInit {

//  livros: Array<any> = livros;
  
  livros: Array<any>;
  erro: string;
  
  constructor(
    private http: Http,
    private livrosService: LivrosService
  ) { }

  ngOnInit() {

    this.livrosService.carregarLivros()
    .subscribe(
      data => this.livros = data, 
      error => this.erro = error.statusText      
    );

    this.livrosService.novoLivroSubject.subscribe(
      dados => this.livros.push(dados)
    )
  }

}
