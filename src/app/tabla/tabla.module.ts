import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app/app-routing.module';
import { TablaListaComponent } from '../tabla-lista/tabla-lista.component';
import { TablaTextilComponent } from '../tabla-textil/tabla-textil.component';
import { TablaMaderaComponent } from '../tabla-madera/tabla-madera.component';
import { TablaCueroComponent } from '../tabla-cuero/tabla-cuero.component';
import { TablaAlimentosComponent } from '../tabla-alimentos/tabla-alimentos.component';
import { TablaMetalComponent } from '../tabla-metal/tabla-metal.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [TablaListaComponent, TablaTextilComponent, TablaMaderaComponent, TablaCueroComponent, TablaAlimentosComponent, TablaMetalComponent]
})
export class TablaModule { }
