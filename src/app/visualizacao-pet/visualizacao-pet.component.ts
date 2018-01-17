import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListagemService } from '../listagem/listagem.service';
import { Animal } from '../listagem/animal/animal.model';

@Component({
  selector: 'mt-visualizacao-pet',
  templateUrl: './visualizacao-pet.component.html',
  styleUrls: ['./visualizacao-pet.component.css']
})
export class VisualizacaoPetComponent implements OnInit {

  setaVoltar:string = "assets/img/voltar.png";
  logoFacebook = "assets/img/fb.png";

  animal:Animal;

  constructor(private listagemService: ListagemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listagemService.petsById(this.route.snapshot.params['id']).subscribe(animal => this.animal = animal);
  }

}
