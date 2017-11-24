import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';
declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'ap-buscar-municipio',
  templateUrl: './buscar-municipio.component.html',
  styleUrls: ['./buscar-municipio.component.css']
})
export class BuscarMunicipioComponent implements OnInit {
  public municipios: any = [];
  public municipio: any = [];
  public rubros: any = [];
  public countMunicipio: any = [];
  public tipoMunicipio: any = [];
  public mostrarPublicacion:boolean;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.municipios = [
      "Quillacollo", "Sipe Sipe", "Tiquipaya", "Vinto", "Colcapirhua", "Arani", "Vacas", "Arque", "Tacopaya", "Independencia", "Morochata", "Bolívar", "Totora", "Pojo", "Pocona", "Chimore",
      "Puerto Villarroel", "Entre Rios", "Capinota", "Sicaya", "Santivañez", "Aiquile", "Pasorapa", "Omereque", "Cochabamba", "Sacaba", "Colomi", "Villa Tunari", "Tarata", "Anzaldo", "Arbieto", "Sacabamba",
      "Cliza", "Toco", "Tolata", "Mizque", "Vila Vila", "Alalay", "Punata", "Villa Ribero", "San Benito", "Tacachi", "Cuchumuela", "Tapacarí", "Tiraque", "Shinahota"];
    this.rubros = ['textil', 'cuero', 'alimentos', 'madera', 'metal'];
    this.mostrarPublicacion = true;
  }

  fnExcelReport() {
    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';
    tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
    tab_text = tab_text + "<table border='1px'>";
    
   //get table HTML code
    tab_text = tab_text + $('#myTable').html();
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';
    $('#test').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
    $('#test').attr('download', 'Test file.xls');
   }

  searchByMunicipio(value: any) {
    this.mostrarPublicacion = false;
    this.service.searchByMunicipio(value)
      .subscribe((result) => {
        this.municipio = result
        if (result[0] === undefined) {
          this.countMunicipio.count = 0;
          this.tipoMunicipio = value.toString();
        }else{  
          this.tipoMunicipio = result[0]['municipio'];
          this.service.countByMunicipio(result[0]['municipio'])
            .subscribe((result) => {
              this.countMunicipio = result[0];
          })
        }
      })
  }

  searchByMunicipioAndRubro(municipio: any, rubro: any) {
    this.mostrarPublicacion = false;
    this.service.searchByMunicipioRubro(municipio, rubro)
      .subscribe((result) => {
        this.municipio = result
        if (result[0] === undefined) {
          this.countMunicipio.count = 0;
          this.tipoMunicipio = municipio.toString();
        }else{
          this.tipoMunicipio = result[0]['municipio'];
          this.service.countByMunicipioAndRubro(municipio, rubro)
          .subscribe((result) => {
            this.countMunicipio = result[0];
          })
        }
      })
  }

  buscarMunicipio(municipio: any, rubro: any) {
    //console.log("municipio: ", municipio)
    //console.log("rubro: ", rubro)
    if (municipio != undefined && rubro != undefined) {
      //console.log("muestro por dos queries");
      this.searchByMunicipioAndRubro(municipio,rubro);
    } else if (municipio != undefined && rubro == undefined) {
      //console.log("muestro solo municipio", municipio)
      this.searchByMunicipio(municipio);
    } else if (municipio == undefined && rubro != undefined) {
      alert("Seleccione un municipio");
    }
  }
}
