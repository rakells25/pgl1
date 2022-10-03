import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
