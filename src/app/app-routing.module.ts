import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'reactive', component: FormularioReactivoComponent},
  {path: 'template', component: FormularioTemplateComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
