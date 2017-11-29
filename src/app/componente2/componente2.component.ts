import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../app/sharep/services/service.service';
import { Componente } from '../../model/componente';
import { Router, ActivatedRoute } from '@angular/router';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ap-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  private componentes:any = [];


  constructor(private service: ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.showComponent2()
    .subscribe((result)=>{
      //console.log(result);
      this.componentes = result;
    })
  }

  fnExcelReport() {
    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
    tab_text = tab_text + '<x:Name>Tabla Componentes 1</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
    tab_text = tab_text + "<table border='1px'>";
    
   //get table HTML code
    tab_text = tab_text + $('#myTable').html();
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';
    $('#componente').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
    $('#componente').attr('download', 'componente file.xls');
  }

  editar(value){
    //console.log(value);
    this.router.navigate(['componentes','componente2-editar',value]);
  }
}
