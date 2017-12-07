import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../sharep/services/service.service';
import { Ficha } from '../../model/ficha';

import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'ap-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})

export class EditarListaComponent implements OnInit {
  @ViewChild('editarform') editarform;
  public titulo: string;
  public listaId: any;
  public ficha: any = [];
  public componente: any = [];
  public mostrarOtro: boolean;
  public rubros: any;
  public municipios: any;
  public sociedades: any;
  public mostrarNombreSociedad: boolean;
  date = new Date();
  options: DatepickerOptions = {
    displayFormat: 'MMM D[,] YYYY',
    //barTitleFormat: 'yyyy-MM-dd',
    locale: frLocale
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: ServiceService, private location:Location) {
    this.titulo = "FORMULARIO DE EDICIÓN";
  }

  ngOnInit() {
    
    this.rubros = ['textil', 'cuero', 'alimentos', 'madera', 'metal'];
    this.municipios = ["Quillacollo", "Sipe Sipe", "Tiquipaya", "Vinto", "Colcapirhua", "Arani", "Vacas",
      "Arque", "Tacopaya", "Independencia", "Morochata", "Bolívar", "Totora", "Pojo", "Pocona", "Chimore",
      "Villarroel", "Entre Rios", "Capinota", "Sicaya", "Santivañez", "Aiquile", "Pasorapa", "Omereque",
      "Cochabamba", "Sacaba", "Colomi", "Villa Tunari", "Tarata", "Anzaldo", "Arbieto", "Sacabamba",
      "Cliza", "Toco", "Tolata", "Mizque", "Vila Vila", "Alalay", "Punata", "Villa Ribero", "San Benito",
      "Tacachi", "Cuchumuela", "Tapacarí", "Tiraque", "Shinahota"];
    this.sociedades = ['Unipersonal', 'Asoc. Productiva', 'OECA', 'Otro'];
    this.mostrarOtro = true;
    this.mostrarNombreSociedad = true;
    this.date;
    this.route.params.subscribe(params => {
      this.listaId = params['id'];

      this.service.searchByItem(this.listaId)
        .subscribe((result) => {
          console.log(result)
          //console.log(result[0]['fechaInscripcion']);
          this.ficha = result[0];
        })
    })

  }

  value(value) {
    this.mostrarOtro = value
  }

  onSubmit() {

    this.ficha = {
      codigo:this.ficha.codigo,
      solicitante:this.ficha.solicitante, 
      ci:this.ficha.ci,
      direccion:this.ficha.direccion,
      zona: this.ficha.zona,
      municipio:this.ficha.municipio,
      celular:this.ficha.celular,
      telefono:this.ficha.telefono,
      fax:this.ficha.fax,
      email:this.ficha.email,
      nombreEmpresa:this.ficha.nombreEmpresa ,
      sociedad: this.ficha.sociedad,
      nombreSociedad: this.ficha.nombreSociedad,
      direccionEmpresa:this.ficha.direccionEmpresa,
      zonaEmpresa:this.ficha.zonaEmpresa ,
      municipioEmpresa:this.ficha.municipioEmpresa,
      antiguedad:this.ficha.antiguedad,
      numOperarios:this.ficha.numOperarios,
      varones:this.ficha.varones,
      mujeres:this.ficha.mujeres,
      actividadPrincipal:this.ficha.actividadPrincipal,
      descripcionActividad:this.ficha.descripcionActividad,
      cantidadProducida:this.ficha.cantidadProducida,
      fechaInscripcion:this.ficha.fechaInscripcion,
      licenciaAlcaldia:this.ficha.licenciaAlcaldia,
      senasag:this.ficha.senasag,
      nit:this.ficha.nit,
      senapi:this.ficha.senapi,
      ninguno:this.ficha.ninguno,
      fundaempresa:this.ficha.fundaempresa,
      norma:this.ficha.norma,
      detalleNorma:this.ficha.detalleNorma,
      otros:this.ficha.otros,
      aperturaMercado:this.ficha.aperturaMercado,
      apolloServiciosFinancieron:Number(this.ficha.apolloServFinanciero),
      capacitacionAsistenciaTecnica:Number(this.ficha.capaciAsistenciaTecni)
    }
     let apollo =  this.ficha.apolloServiciosFinancieron;
     let capacitacion = this.ficha.capacitacionAsistenciaTecnica

     this.componente = {
      codigo: this.ficha.codigo, solicitante: this.ficha.solicitante, actividadPrincipal: this.ficha.actividadPrincipal,
      municipio: this.ficha.municipio, nombreEmpresa: this.ficha.nombreEmpresa,
      componente1: this.ficha.aperturaMercado,
      componente2: apollo,
      componente3: capacitacion,
      licenciaAlcaldia: this.ficha.licenciaAlcaldia, fundaempresa: this.ficha.fundaempresa, nit: this.ficha.nit,
      senasag: this.ficha.senasag,senapi: this.ficha.senapi} 
  

      console.log(this.componente)
    this.service.updateRecord(this.ficha)
      .subscribe((result) => {

        this.service.updateRecordEdited(this.componente)
        .subscribe((result) => {
          window.scroll(0, 0);
          alert("Se actualizo los datos");
        })
      },err => {
        console.log(err);
      });
    //this.editarform.reset();
    this.router.navigate(['buscar']);
  }

  seleccionarSociedad(value: any) {
    if (value.model === "Asoc. Productiva") {
      this.mostrarNombreSociedad = false;
    } else if (value.model === "Otro") {
      this.mostrarNombreSociedad = false;
    } else if (value.model === "Unipersonal") {
      this.mostrarNombreSociedad = true;
    } else {
      this.mostrarNombreSociedad = true;
    }

  }

  atras() {
    this.router.navigate(['buscar']);
  }
}
