import { Component, OnInit, Input } from '@angular/core';
import {DadosService} from '../services/dados.service';
import {Livro} from '../livro';
import {LoginComponent} from "../login/login.component";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    resumo: '',
    escrito_por: '',
    genero: '',
    isbn: '',
    capa: ''
  };
  constructor(
      private livroService: DadosService, 
      private usuario: LoginComponent,
      private router: Router,
      private route: ActivatedRoute,
    ) {
      this.livro = JSON.parse(route.snapshot.params.livro);
  }

  ngOnInit() {
  }
  onSubmit() {
      this.livroService.editarLivro(this.livro).subscribe(_ => {
          this.router.navigate(['/estante'])
      }, err => {
          alert(JSON.stringify(err));
      })
  }
}
