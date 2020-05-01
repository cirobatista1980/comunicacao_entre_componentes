import { TransacaoComponent } from './transacao/transacao.component';
import { AcessoComponent } from './acesso/acesso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:  'acesso', component:  AcessoComponent},
  { path:  'transacao', component:  TransacaoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
