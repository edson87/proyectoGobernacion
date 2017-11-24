import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from '../app/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { BuscarListaComponent } from './buscar-lista/buscar-lista.component';
import { RubroListaComponent } from './rubro-lista/rubro-lista.component';
import { TextilComponent } from './textil/textil.component';
import { MaderaComponent } from './madera/madera.component';
import { CueroComponent } from '../app/cuero/cuero.component';
import { AlimentosComponent } from '../app/alimentos/alimentos.component';
import { MetalComponent } from './metal/metal.component';
import { TablaListaComponent } from '../app/tabla-lista/tabla-lista.component';
import { TablaTextilComponent } from '../app/tabla-textil/tabla-textil.component';
import { TablaMaderaComponent } from '../app/tabla-madera/tabla-madera.component';
import { TablaCueroComponent } from '../app/tabla-cuero/tabla-cuero.component';
import { TablaAlimentosComponent } from '../app/tabla-alimentos/tabla-alimentos.component';
import { TablaMetalComponent } from '../app/tabla-metal/tabla-metal.component';
import { BuscarMunicipioComponent } from '../app/buscar-municipio/buscar-municipio.component';
import { EditarListaComponent } from '../app/editar-lista/editar-lista.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component:LoginComponent },
  {path:'menu/:user', component:MenuComponent},
  {path:'inscripcion', component:InscripcionComponent},
  {path:'buscar', component:BuscarListaComponent},
  {path:'municipio', component:BuscarMunicipioComponent},
  {path:'buscar/editar/:id', component:EditarListaComponent},
  {path:'rubros', component:RubroListaComponent,
    children:[
       {path:'', redirectTo: 'textil', pathMatch:'full'},
       {path:'textil', component:TextilComponent},
       {path:'madera', component:MaderaComponent},
       {path:'cuero', component:CueroComponent},
       {path:'alimentos', component:AlimentosComponent},
       {path:'metal', component:MetalComponent}
    ]
  },
  {path:'tabla', component:TablaListaComponent,
    children:[
      {path:'', redirectTo: 'textil', pathMatch:'full'},
      {path:'textil', component:TablaTextilComponent},
      {path:'madera', component:TablaMaderaComponent},
      {path:'cuero', component:TablaCueroComponent},
      {path:'alimentos', component:TablaAlimentosComponent},
      {path:'metal', component:TablaMetalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
