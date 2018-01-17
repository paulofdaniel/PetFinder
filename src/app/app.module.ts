import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { VisualizacaoPetComponent } from './visualizacao-pet/visualizacao-pet.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroPetComponent } from './cadastro-pet/cadastro-pet.component';
import { LoginComponent } from './login/login.component';
import { AnimalComponent } from './listagem/animal/animal.component';

import { ListagemService } from './listagem/listagem.service';


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    VisualizacaoPetComponent,
    CadastroComponent,
    CadastroPetComponent,
    LoginComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ListagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
