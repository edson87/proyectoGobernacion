import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubroListaComponent } from '../rubro-lista/rubro-lista.component';
import { AppRoutingModule } from '../../app/app-routing.module';
import { TextilComponent } from '../textil/textil.component';
import { MaderaComponent } from '../madera/madera.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [RubroListaComponent, TextilComponent, MaderaComponent]
})
export class RubrosModule { }
