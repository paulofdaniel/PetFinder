import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {Animal} from './animal/animal.model'

import {PETFINDER_API} from '../app.api'

@Injectable()

export class ListagemService{
  constructor(private http:Http){};

  petsById(id:string): Observable<Animal> {
    return this.http.get(`${PETFINDER_API}/anim/${id}`).map(response => response.json());
  }

  animais(): Observable<Animal[]>{
    return this.http.get(`${PETFINDER_API}/anim`).map(response => response.json());
  }

}
