import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  marca:string = "assets/img/marca_cadastro.png";
  logoFacebook:string = "assets/img/fb_login.png;"

  constructor() { }

  ngOnInit() {
  }

}
