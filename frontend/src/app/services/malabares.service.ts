import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user-crud.service';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class MalabaresService {

  idproducto: string;
  nombre: string;
  descripcion: string;
  img: string;

  endpoint = 'http://localhost:8080/api/bicycles';


  constructor(private httpClient: HttpClient) { }

  getMalabares(){
    return this.httpClient.get(this.endpoint);
  }

  insertarProducto(user: User) {
    return this.httpClient.post(this.endpoint, JSON.stringify(user));
  }

  updateProducto(user: User) {
    return this.httpClient.post(this.endpoint, JSON.stringify(user));
  }

  deleteProducto(idproducto: string){
   // const url = BASE_URL + supplant(DELETE_PRODUCTO_ENDPOINT, {idproducto: params.id});
    return this.httpClient.delete(this.endpoint);
  }

}
