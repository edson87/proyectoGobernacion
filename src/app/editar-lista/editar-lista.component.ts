import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../sharep/services/service.service';

import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'ap-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})

export class EditarListaComponent implements OnInit {
  @ViewChild('editarform')editarform;
  private titulo:string;
  private listaId:any;
  private ficha: any = [];
  private mostrarOtro:boolean;
  date = new Date();
  options: DatepickerOptions = {  
    displayFormat: 'MMM D[,] YYYY',
    //barTitleFormat: 'yyyy-MM-dd',
    locale: frLocale
  };

  constructor(private router:Router, private route:ActivatedRoute,private service: ServiceService) {
    this.titulo = "Editar Usuario";
  }

  ngOnInit() {
    this.date;
    this.route.params.subscribe(params => {
      this.listaId = params['id'];

      this.service.searchByItem(this.listaId)
      .subscribe((result) => {
        console.log(result)
        console.log(result[0]['fechaInscripcion']);
        this.ficha = result[0];   
      })
    })
    this.mostrarOtro = true;
  }

  value(value){
    this.mostrarOtro = value
  }

  onSubmit(){
  //console.log(this.ficha)
   this.service.updateRecord(this.ficha)
    .subscribe((result) => {
      //console.log("bien", result)
      window.scroll(0,0);
      alert("Se actualizo los datos");
    },err => {
      console.log(err);
    });
    this.editarform.reset();
    this.router.navigate(['buscar']);
  }
}
