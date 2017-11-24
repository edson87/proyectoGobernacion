import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';


@Component({
  selector: 'ap-madera',
  templateUrl: './madera.component.html',
  styleUrls: ['./madera.component.css']
})
export class MaderaComponent implements OnInit {
  public titulo:string = "LISTA DE PRODUCTORES DEL RUBRO MADERA";
  public madereros: any = [];
  public recurso:string = "madera";
  public check = "./assets/img/icons8-checkmark.png";
  
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.searchAllResources(this.recurso)
    .subscribe((result) => {
      this.madereros = result;
    })
  }

}
