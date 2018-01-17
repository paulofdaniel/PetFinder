import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  marca:string = "assets/img/marca_cadastro.png";
  logoFacebook:string = "assets/img/fb_login.png;"

  constructor() { }

  ngOnInit() {
  }

}
