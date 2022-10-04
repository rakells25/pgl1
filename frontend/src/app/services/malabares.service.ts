import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class MalabaresService {

  endpoint = 'http://localhost:8080/api/bicycles';

  constructor(private httpClient: HttpClient) { }

  getMalabares(){
    return this.httpClient.get(this.endpoint);
  }


  deleteProducto(idproducto: string){
    return this.httpClient.delete(this.endpoint);
  }

}
   





// const url = BASE_URL + supplant(DELETE_PRODUCTO_ENDPOINT, {idproducto: params.id});