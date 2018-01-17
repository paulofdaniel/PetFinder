import { Component, OnInit } from '@angular/core';

import {Animal} from './animal/animal.model';
import {ListagemService} from './listagem.service';

@Component({
  selector: 'mt-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  animais: Animal[] = []

  constructor(private listagemService: ListagemService){}

  ngOnInit() {
    this.listagemService.animais().subscribe(listagem => this.animais = listagem);
  }

}
