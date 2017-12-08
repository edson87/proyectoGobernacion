import { Component, OnInit, ElementRef } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../sharep/services/service.service';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'ap-buscar-lista',
  templateUrl: './buscar-lista.component.html',
  styleUrls: ['./buscar-lista.component.css']
})
export class BuscarListaComponent implements OnInit {
  public titulo: string = "Buscar";
  public codigoP: any = [];
  public ciP: any = [];
  public nombreb: string;
  public marcaCodigo: boolean;
  public marcaNombre: boolean;
  public ci: string;
  public codigo: string;
  public telMostrar: boolean;
  public celMostrar: boolean;
  public licAlcadiaMostrar: string;
  public check = "./assets/img/icons8-checkmark.png";
  public municipios: any = [];
  public model1: string;

  public query = '';
  public nombres: any = [];
  public filteredList = [];
  public elementRef;
  public result: any = [];

  constructor(private _location: Location, private service: ServiceService, private router: Router, myElement: ElementRef) {
    this.elementRef = myElement;
  }

  ngOnInit() {
    this.codigoP = [];
    this.ciP = [];
    this.marcaCodigo = false;
    this.marcaNombre = false
    this.ci = "";
    this.telMostrar = true;
    this.municipios = ["Quillacollo", "Sipe Sipe", "Tiquipaya", "Vinto", "Colcapirhua", "Arani", "Vacas",
      "Arque", "Tacopaya", "Independencia", "Morochata", "Bolívar", "Totora", "Pojo", "Pocona", "Chimore",
      "Puerto Villarroel", "Entre Rios", "Capinota", "Sicaya", "Santivañez", "Aiquile", "Pasorapa", "Omereque",
      "Cochabamba", "Sacaba", "Colomi", "Villa Tunari", "Tarata", "Anzaldo", "Arbieto", "Sacabamba",
      "Cliza", "Toco", "Tolata", "Mizque", "Vila Vila", "Alalay", "Punata", "Villa Ribero", "San Benito",
      "Tacachi", "Cuchumuela", "Tapacarí", "Tiraque", "Shinahota"];

    this.service.searchAllNames()
      //.map(response => response.json())
      .subscribe((result) => {
        this.result = result
        for (let i = 0; i < this.result.length; i++) {
          this.nombres.push(this.result[i]['solicitante'])
        }
      });
  }


  filter() {
    if (this.query !== "") {
      this.filteredList = this.nombres.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
    }
  }

  selectName() {
    //console.log(this.query)
  }

  buscarPorNombre() {
    const id = this.query.toString();
    this.service.searchByNames(id)
      .subscribe((result) => {
        this.codigoP = result;
        // this.codigoP[0]['telefono']? this.telMostrar = true : this.telMostrar = false;
      })
  }

  mostrarCi(id: any) {
    this.service.searchByCI(id)
      .subscribe((result) => {
        this.ciP = result;
      })
  }

  buscarNombre() {
    if (this.query === undefined) {
      alert("ingrese una palabra");
    } else {
      if (this.marcaNombre === false) {
        this.marcaCodigo = true;
        this.buscarPorNombre();

      } else if (this.marcaNombre === true) {
        this.ci = "";
        this.marcaNombre = false;
        this.marcaCodigo = true;
        this.buscarPorNombre();
      }
    }
  }

  buscarCi(ci: any) {
    if (ci === "") {
      alert("ingrese una palabra");
    } else {
      if (this.marcaCodigo === false) {
        this.marcaNombre = true;
        this.mostrarCi(ci);

      } else if (this.marcaCodigo === true) {
        this.query = "";
        this.marcaCodigo = false;
        this.marcaNombre = true;
        this.mostrarCi(ci);

      }
    }
  }

  editar(value: any) {
    this.router.navigate(['buscar', 'editar', value]);
  }

  eliminar(id: any, codigo: any) {

    this.service.deleteItem(id)
      .subscribe((result) => {
        this.service.deleteComponetItem(codigo)
          .subscribe((result) => {
           // window.location.reload();
            this.ci = "";
            this.query = "";
            this.marcaCodigo = false;
            this.marcaNombre = false;
          })
      })
  }

  goBack() {
    this._location.back();
  }
}
