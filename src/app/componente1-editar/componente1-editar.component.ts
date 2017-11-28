import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../app/sharep/services/service.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'ap-componente1-editar',
  templateUrl: './componente1-editar.component.html',
  styleUrls: ['./componente1-editar.component.css']
})
export class Componente1EditarComponent implements OnInit {
  public id;
  public componente:any = [];
  options: DatepickerOptions = {  
    displayFormat: 'MMM D[,] YYYY',
    //barTitleFormat: 'yyyy-MM-dd',
    locale: frLocale
  };
  
  constructor(private route:ActivatedRoute, private service:ServiceService, private location:Location) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      
      this.service.showOnlyOneComponent(this.id)
        .subscribe((result)=>{
          this.componente = result[0];
          //console.log(this.componente);
        })
    })
  }

  atras(){
    this.location.back()
  }
}
