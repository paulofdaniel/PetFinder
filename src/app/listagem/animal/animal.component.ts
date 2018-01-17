import { Component, OnInit, Input } from '@angular/core';

import {Animal} from './animal.model'
//import { ListagemComponent } from '../../listagem/listagem.component';

@Component({
  selector: 'mt-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})

export class AnimalComponent implements OnInit {

  @Input() animal:Animal;

  constructor() { }

  ngOnInit() {
  }

}
