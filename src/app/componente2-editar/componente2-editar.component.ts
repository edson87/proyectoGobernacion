import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../app/sharep/services/service.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'ap-componente2-editar',
  templateUrl: './componente2-editar.component.html',
  styleUrls: ['./componente2-editar.component.css']
})
export class Componente2EditarComponent implements OnInit {
  public id:number;
  public componente:any = [];
  public mostrarAsesoramiento:boolean;
  options: DatepickerOptions = {
    displayFormat: 'MMM D[,] YYYY',
    //barTitleFormat: 'yyyy-MM-dd',
    locale: frLocale
  };
  
  constructor(private router:Router, private route:ActivatedRoute, private service:ServiceService) { }

  ngOnInit() {
    this.mostrarAsesoramiento = true;
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.service.showOnlyOneComponent(this.id)
        .subscribe((result)=>{
          this.componente = result[0];
          console.log(this.componente);
          if(this.componente['asesoramientoSeguimiento'] == "si"){
            this.mostrarAsesoramiento = false;
          }
        })
    })
  }

  abrir(value){
    console.log(value);
    this.mostrarAsesoramiento = value;
  }

  cerrar(value){
    this.mostrarAsesoramiento = value;
  }

  atras(){
    this.router.navigate(['componentes','componente2'])
  }

  onSubmit(){
    if(this.componente['asesoramientoSeguimiento'] == "no"){
      this.componente['monto'] = 0;
      this.componente['entidadFinanciera'] = "";
      this.componente['observaciones'] = "";
    } 
    //console.log(this.componente);   
    
    this.service.updateOneComponent(this.componente)
    .subscribe(()=>{
      alert("Se guardo Correctamente!");
      this.router.navigate(['componentes','componente2']);
    })
  }
}
