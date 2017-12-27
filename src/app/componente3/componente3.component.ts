import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../app/sharep/services/service.service';
import { Componente } from '../../model/componente';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'ap-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {
  public componentes:any = [];

  constructor(private service: ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.showComponent3()
      .subscribe((result)=>{
        this.componentes = result
      });
    
  }

  fnExcelReport() {

    /*var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
    tab_text = tab_text + '<x:Name>Tabla Componentes 3</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
    tab_text = tab_text + "<table border='1px'>";
    
   //get table HTML code
    tab_text = tab_text + $('#myTable').html();
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';
    $('#componente').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
    $('#componente').attr('download', 'componente file.xls');*/

    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
    tab_text = tab_text + '<x:Name>Componente 3</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
    tab_text = tab_text + "<table border='1px'>";
    
   //get table HTML code
    tab_text = tab_text + $('#myTable').html();
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';
    
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    //For IE
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
         if (window.navigator.msSaveBlob) {
         var blob = new Blob([tab_text], {type: "application/csv;charset=utf-8;"});
         navigator.msSaveBlob(blob, 'Test file.xls');
         }
    } 
   //for Chrome and Firefox 
   else {
    $('#test').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
    $('#test').attr('download', 'Componente3 file.xls');
   }
  }

  editar(value:any){
    this.router.navigate(['componentes','componente3-editar',value]);
  }

}
