import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../app/sharep/services/service.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'ap-componente3-editar',
  templateUrl: './componente3-editar.component.html',
  styleUrls: ['./componente3-editar.component.css']
})
export class Componente3EditarComponent implements OnInit {
  public id:number;
  public componente:any = [];
  public mostrarOpcion:boolean;
  public formacion:any [];
  options: DatepickerOptions = {
    displayFormat: 'MMM D[,] YYYY',
    //barTitleFormat: 'yyyy-MM-dd',
    locale: frLocale
  };

  constructor(private router:Router, private route:ActivatedRoute, private service:ServiceService) { }

  ngOnInit() {
    this.mostrarOpcion = true;

    this.formacion = ['primaria','secundaria','profesional','tecnico','otros']
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.service.showOnlyOneComponent(this.id)
        .subscribe((result)=>{
          this.componente = result[0];
          console.log(this.componente);
          if(this.componente['certificados'] != ""){
            this.mostrarOpcion = false;
          }
      })
    })
  }

  abrir(value){
    this.mostrarOpcion = false;
  }

  cerrar(value){
    this.mostrarOpcion = true;
  }

  atras(){
    this.router.navigate(['componentes','componente3']);
  }
  onSubmit(){
    //console.log(this.componente)
    if(this.componente['certificados'] == "no"){
      this.componente['certificados'] = "";
    } 
    this.service.updateOneComponent(this.componente)
    .subscribe(()=>{
      alert("Se guardo Correctamente!");
      this.router.navigate(['componentes','componente3']);
    })
  }
}
