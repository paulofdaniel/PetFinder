import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'petfinder-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao Meu app - Primeiro projeto Angular 4!'

  constructor() { }

  slogan="Encontre seu Pet!"
  logo = "assets/img/marca.png"

  ngOnInit() {
  }

}
