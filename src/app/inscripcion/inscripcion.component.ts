import { Component, OnInit, ViewChild} from '@angular/core';
import { Location } from '@angular/common';
import { ServiceService } from '../sharep/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Componente } from '../../model/componente';
declare var jQuery:any;
declare var $:any;

import {Ficha} from '../../model/ficha';

@Component({
  selector: 'ap-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})

export class InscripcionComponent implements OnInit {
  @ViewChild('fichasform')fichasform ;
  public ficha:Ficha;
  public componente:Componente;
  public insertRecords = [];
  public titulo:string = "Ficha de inscripcion";
  public usuario:string;
  public rubros = [];
  public municipios = [];
  private sociedades = [];
  public mostrarOtro:boolean;
  public mostrarNombreSociedad:boolean;


  constructor(private _location:Location, private _service:ServiceService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.ficha = new Ficha();
    this.componente = new Componente();
    this.rubros = ['textil','cuero','alimentos','madera','metal'];
    this.municipios = ["Quillacollo","Sipe Sipe","Tiquipaya", "Vinto","Colcapirhua","Arani","Vacas",
    "Arque","Tacopaya","Independencia","Morochata","Bolívar","Totora","Pojo","Pocona","Chimore", 
      "Villarroel","Entre Rios","Capinota","Sicaya","Santivañez","Aiquile","Pasorapa","Omereque",
      "Cochabamba","Sacaba","Colomi","Villa Tunari","Tarata","Anzaldo","Arbieto","Sacabamba",
      "Cliza","Toco","Tolata","Mizque","Vila Vila","Alalay","Punata","Villa Ribero","San Benito",
      "Tacachi","Cuchumuela","Tapacarí","Tiraque","Shinahota"];
      this.sociedades = ['Unipersonal','Asoc. Productiva','OECA','Otro'];
    this.mostrarOtro = true;
    this.mostrarNombreSociedad = true;
  }

  onSubmit(){

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
      afp:this.ficha.afp ,
      cajaSalud:this.ficha.cajaSalud,
      nit:this.ficha.nit,
      senapi:this.ficha.senapi,
      ninguno:this.ficha.ninguno,
      fundaempresa:this.ficha.fundaempresa,
      norma:this.ficha.norma,
      detalleNorma:this.ficha.detalleNorma,
      otros:this.ficha.otros,
      aperturaMercado:this.ficha.aperturaMercado,
      apolloServiciosFinancieron:this.ficha.apolloServiciosFinancieron,
      capacitacionAsistenciaTecnica:this.ficha.capacitacionAsistenciaTecnica,
    }
    this.componente = {
      codigo:this.ficha.codigo,
      solicitante:this.ficha.solicitante, 
      componente1:this.ficha.aperturaMercado,
      actividadPrincipal:this.ficha.actividadPrincipal,
      ferias:"",
      finFeriaFecha:this.ficha.fechaInscripcion,
      relacionesComerciales:"",
      finRelaComerFecha:this.ficha.fechaInscripcion,
      promoVentasProdu:"",
      finPromoVentasFecha:this.ficha.fechaInscripcion,
      componente2:this.ficha.apolloServiciosFinancieron,
      estadoComponente2:"proceso",
      fechaComponente2:this.ficha.fechaInscripcion,
      componente3:this.ficha.capacitacionAsistenciaTecnica,
      estadoComponente3:"proceso",
      fechaComponente3:this.ficha.fechaInscripcion,
      nombreEmpresa:this.ficha.nombreEmpresa,
      municipio:this.ficha.municipio

    }
    //console.log(this.ficha);
    //console.log(this.componente)
    /*let codigo = this.ficha['codigo'].toString();
    this._service.searchByCode(codigo)
    .subscribe((result)=>{
      if(codigo === result[0]['codigo']){
        $('#error').modal('show')
      }else{
        alert("Entra")*/
        this._service.insertRecords(this.ficha)
        .subscribe((result) => {
         // console.log("bien", result)
         this._service.insertComponents(this.componente)
         .subscribe((result)=>{
          window.scroll(0,0);
          $('#exampleModal').modal('show')

         },err => {
           console.log(err)
         });

        },err => {
          console.log(err);
        });
     /* }
    },err =>{
      console.log(err);
    });*/
   // this.fichasform.reset();
  }

  seleccionarSociedad(value:any){
    if (value.model === "Asoc. Productiva") {
      this.mostrarNombreSociedad = false;
    }else if (value.model === "Otro") {
      this.mostrarNombreSociedad = false;
    }else if (value.model === "Unipersonal") {
      this.mostrarNombreSociedad = true;
    }else{
      this.mostrarNombreSociedad = true;
    }
    
  }

  value(value){
    this.mostrarOtro = value
  }
  
  goBack(){
    this._location.back();
  }

  
}
