import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';

@Component({
  selector: 'ap-cuero',
  templateUrl: './cuero.component.html',
  styleUrls: ['./cuero.component.css']
})
export class CueroComponent implements OnInit {
  public titulo:string = "LISTA DE PRODUCTORES DEL RUBRO CUEROS";
  public recurso:string = "cuero";
  public cueros: any = [];
  public check = "./assets/img/icons8-checkmark.png";
  
  constructor(private service:ServiceService) { }

  ngOnInit() {

    this.service.searchAllResources(this.recurso)
    .subscribe((result) => {
      this.cueros = result;
    })

  }

}
