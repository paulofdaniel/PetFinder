# PetFinder

Projeto final de Linguagens e Técnicas de Programação IV da Universidade FUMEC. Consiste em um sistema para registro e listagem de animais perdidos.

Basicamente, o PetFinder foi criado utilizando Angular 2 e Node.js.

## Recursos aprendidos

### Criação de componentes
### Utilização de diretivas
Exemplo:
```
<div *ngFor="let animal of animais">
    <mt-animal [animal]="animal"></mt-animal>
</div>
```
### Criação de Rotas
Exemplo:
```
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
```
### Criação de Serviços
Exemplo:
```
export class ListagemService{
  constructor(private http:Http){};

  petsById(id:string): Observable<Animal> {
    return this.http.get(`${PETFINDER_API}/anim/${id}`).map(response => response.json());
  }

  animais(): Observable<Animal[]>{
    return this.http.get(`${PETFINDER_API}/anim`).map(response => response.json());
  }
}
```

## Telas

![Listagem e Mapa](/../master/readme_images/git_01.png?raw=true "Listagem e Mapa")

![Detalhes](/../master/readme_images/git_02.png?raw=true "Detalhes")

![Login](/../master/readme_images/git_03.png?raw=true "Login")

![Cadastro](/../master/readme_images/git_04.png?raw=true "Cadastro")

![Registro de Animal](/../master/readme_images/git_05.png?raw=true "Registro de Animal")
