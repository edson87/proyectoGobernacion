import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';

@Component({
  selector: 'ap-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.css']
})
export class MetalComponent implements OnInit {
  public metales: any = [];
  public titulo: string = "LISTA DE PRODUCTORES DEL RUBRO METAL MECÁNICO";
  public recurso: string = "metal";
  public check = "./assets/img/icons8-checkmark.png";
  
  constructor(private service: ServiceService) { }

  ngOnInit() {

    this.service.searchAllResources(this.recurso)
      .subscribe((result) => {
        this.metales = result;
      })


  }

}
