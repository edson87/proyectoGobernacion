import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../sharep/services/service.service';

@Component({
  selector: 'ap-buscar-lista',
  templateUrl: './buscar-lista.component.html',
  styleUrls: ['./buscar-lista.component.css']
})
export class BuscarListaComponent implements OnInit {
  public titulo:string = "Buscar";
  public codigoP:any = [];
  public ciP:any = [];
  public nombreb:string;
  public marcaCodigo:boolean;
  public marcaNombre:boolean;
  public nombre:string;
  public codigo:string;
  public telMostrar:boolean;
  public celMostrar:boolean;
  public licAlcadiaMostrar:string;
  public check = "./assets/img/icons8-checkmark.png";
  public municipios:any = [];

  constructor(private _location:Location,private service:ServiceService, private router:Router) {}

  ngOnInit() {
     this.codigoP = [];
     this.ciP = [];
     this.marcaCodigo = false;
     this.marcaNombre = false
     this.nombre = "";
     this.telMostrar = true;
     this.municipios = ["Quillacollo","Sipe Sipe","Tiquipaya", "Vinto","Colcapirhua","Arani","Vacas",
     "Arque","Tacopaya","Independencia","Morochata","Bolívar","Totora","Pojo","Pocona","Chimore", 
       "Puerto Villarroel","Entre Rios","Capinota","Sicaya","Santivañez","Aiquile","Pasorapa","Omereque",
       "Cochabamba","Sacaba","Colomi","Villa Tunari","Tarata","Anzaldo","Arbieto","Sacabamba",
       "Cliza","Toco","Tolata","Mizque","Vila Vila","Alalay","Punata","Villa Ribero","San Benito",
       "Tacachi","Cuchumuela","Tapacarí","Tiraque","Shinahota"];
  }

  buscarMunicipio(value){
    console.log(value)
  }
  
  mostrarCodigo(id:string){
    
    this.service.searchByCode(id)
    .subscribe((result) => {
        this.codigoP = result;
        
        this.codigoP[0]['telefono']? this.telMostrar = true : this.telMostrar = false;
    })
  }

  mostrarCi(id:any){
    this.service.searchByCI(id)
      .subscribe((result)=>{
        this.ciP = result;
      })
  }

  buscarCodigo(codigo:any){
    if (codigo === undefined) {
      alert("ingrese una palabra");
    }else{
      if (this.marcaNombre === false) {
        this.marcaCodigo = true;
        this.mostrarCodigo(codigo);
        
      }else if(this.marcaNombre === true){
        this.nombre = "";
        this.marcaNombre = false;
        this.marcaCodigo = true;
        this.mostrarCodigo(codigo);
      }
    }
  }

  buscarNombre(nombre:any){
    if (nombre === "") {
      alert("ingrese una palabra");
    }else{
      if (this.marcaCodigo === false) {
        this.marcaNombre = true;
        this.mostrarCi(nombre);
        
      }else if(this.marcaCodigo === true){
        this.codigo = "";
        this.marcaCodigo = false;
        this.marcaNombre = true;
        this.mostrarCi(nombre);

      }
    }
  }

  editar(value:any){
      this.router.navigate(['buscar','editar',value]);
  }

  eliminar(value:any){
    this.service.deleteItem(value)
      .subscribe((result) => {
        window.location.reload();
      })
  }

  goBack(){
    this._location.back();
  }
}
