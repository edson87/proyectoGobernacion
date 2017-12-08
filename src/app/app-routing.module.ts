import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MenuComponent } from '../app/menu/menu.component';
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
import { ComponentesListaComponent } from '../app/componentes-lista/componentes-lista.component';
import { Componente1Component } from '../app/componente1/componente1.component';
import { Componente1EditarComponent } from '../app/componente1-editar/componente1-editar.component'
import { Componente2Component } from './componente2/componente2.component';
import { Componente2EditarComponent } from './componente2-editar/componente2-editar.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente3EditarComponent } from './componente3-editar/componente3-editar.component';


const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component:LoginComponent },
  /*{path:'menu/:user', component:MenuComponent},*/
  {path:'inscripcion', component:InscripcionComponent},
  {path:'buscar', component:BuscarListaComponent},
  {path:'municipio', component:BuscarMunicipioComponent},
  {path:'buscar/editar/:id', component:EditarListaComponent},
  {path:'componentes/componente1-editar/:id', component:Componente1EditarComponent},
  {path:'componentes/componente2-editar/:id', component:Componente2EditarComponent},
  {path:'componentes/componente3-editar/:id', component:Componente3EditarComponent},
  {path:'componentes', component:ComponentesListaComponent,
    children:[
      {path:'', redirectTo: 'componente1', pathMatch:'full'},
      {path:'componente1', component:Componente1Component},
      {path:'componente2', component:Componente2Component},
      {path:'componente3', component:Componente3Component}
    ]
  },
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
