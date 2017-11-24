import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ap-tabla-metal',
  templateUrl: './tabla-metal.component.html',
  styleUrls: ['./tabla-metal.component.css']
})
export class TablaMetalComponent implements OnInit {
  public recurso = "metal"
  public metales:any = [];

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.searchAllResources(this.recurso)
    .subscribe((result)=>{
      this.metales = result;
    });
  }

  fnExcelReport() {
    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
    tab_text = tab_text + '<x:Name>Tabla de metales</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
    tab_text = tab_text + "<table border='1px'>";
    
   //get table HTML code
    tab_text = tab_text + $('#myTable').html();
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';
    $('#metal').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
    $('#metal').attr('download', 'Metales file.xls');
  }

  print(){
    let printContents, popupWin;
    printContents = document.getElementById('printSection').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
       <html>
           <head>
               <title>Rubro Metales</title>
               <style>
                   //........Customized style.......
               </style>
           </head>
           <body onload="window.print();window.close()">${printContents}
           </body>
       </html>`
    );
    popupWin.document.close();
  }

}
