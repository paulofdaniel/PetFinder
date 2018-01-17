import {Routes} from '@angular/router';

import {CadastroComponent} from './cadastro/cadastro.component';
import {CadastroPetComponent} from './cadastro-pet/cadastro-pet.component';
import {ListagemComponent} from './listagem/listagem.component';
import {LoginComponent} from './login/login.component';
import {VisualizacaoPetComponent} from './visualizacao-pet/visualizacao-pet.component';

export const ROUTES: Routes = [

  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:'cadastropet',
    component: CadastroPetComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'pet/:id', //'pet/:id'
    component: VisualizacaoPetComponent
  }
]

/*/*ATENÇAO: testar colocar o appComponente como home ou raiz depois

export const ROUTES: Routes = [
  {
    path:'cadastro',
    component: CadastroComponent,
    outlet: 'modais'
  },*/
