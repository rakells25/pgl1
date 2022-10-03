import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MalabaresService } from '../services/malabares.service';

import { UserCrudService } from './../services/user-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  malabares: any = [];
  producto: any = [];

  //constructor(private router: Router) {}

  constructor(private malabaresService: MalabaresService, private userCrudService: UserCrudService, private router: Router) {}


  ngOnInit(){
    this.getAllMalabares();
  }

  getAllMalabares(){
    this.malabaresService.getMalabares().subscribe(response =>{
      this.malabares = response;
    });
  }

  ionViewDidEnter() {
    this.malabaresService.getMalabares().subscribe((response) => {
      this.malabares = response;
    })
  }

  removeUser(producto, i) {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.userCrudService.deleteUser(producto.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Producto eliminado!')
        }
      )
    }
  }

}
