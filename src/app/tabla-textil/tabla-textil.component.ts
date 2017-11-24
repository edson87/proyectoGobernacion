import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ap-tabla-textil',
  templateUrl: './tabla-textil.component.html',
  styleUrls: ['./tabla-textil.component.css']
})
export class TablaTextilComponent implements OnInit {
  public recurso = "textil"
  public textiles:any = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.searchAllResources(this.recurso)
      .subscribe((result)=>{
        this.textiles = result;
      });
  }

  fnExcelReport() {
    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
    tab_text = tab_text + '<x:Name>Tabla de textiles</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
    tab_text = tab_text + "<table border='1px'>";
    
   //get table HTML code
    tab_text = tab_text + $('#myTable').html();
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';
    $('#textil').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
    $('#textil').attr('download', 'Textiles file.xls');
  }

  print(){

    /*var printContents;
    printContents = document.getElementById('printSection').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    window.close()
    document.body.innerHTML = originalContents;*/


    let printContents, popupWin;
    printContents = document.getElementById('printSection').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
       <html>
           <head>
               <title>Rubro Textil</title>
               <style rel="stylesheet" href="style.css">
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
