import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../app/sharep/services/service.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ap-componente1-editar',
  templateUrl: './componente1-editar.component.html',
  styleUrls: ['./componente1-editar.component.css']
})
export class Componente1EditarComponent implements OnInit {
  public id;
  public componente:any = [];
  public mostrarMontos:boolean;
  options: DatepickerOptions = {  
    displayFormat: 'MMM D[,] YYYY',
    //barTitleFormat: 'yyyy-MM-dd',
    locale: frLocale
  };
  
  constructor(private route:ActivatedRoute,private router:Router, private service:ServiceService, private location:Location) { }

  ngOnInit() {
    this.mostrarMontos = true;
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      
      this.service.showOnlyOneComponent(this.id)
        .subscribe((result)=>{
          this.componente = result[0];
          //console.log(this.componente);
          if(this.componente['feriaMontoVenta'] == "si"){
            this.mostrarMontos = false;
          }
        })
    })
  }

  atras(){
    //this.location.back();
    this.router.navigate(['componentes','componente1']);
  }

  onSubmit(){
    if(this.componente['feriaMontoVenta'] == "no"){
      this.componente['montoFeria'] = 0;
      this.componente['ventaConsolidada'] = 0;
      this.componente['intencionVenta'] = 0;
    } 

    this.service.updateOneComponent(this.componente)
      .subscribe((result)=>{
        //console.log(result);
        alert("Se guardo Correctamente!");
       // $('#succesful').modal('show')
        this.router.navigate(['componentes','componente1']);
      })
  }

  cerrar(value){
    this.mostrarMontos = true;
  }
  abrir(value){
    this.mostrarMontos = false;
  }
}
