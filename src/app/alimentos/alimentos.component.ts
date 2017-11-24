import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';


@Component({
  selector: 'ap-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {
  public alimentos:any = [];
  public titulo:string = "LISTA DE PRODUCTORES DEL RUBRO ALIMENTOS Y BEBIDAS";
  public recurso:string = "alimentos";
  public check = "./assets/img/icons8-checkmark.png";
  
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.searchAllResources(this.recurso)
    .subscribe((result) => {
      this.alimentos = result;
    })
  }

}
