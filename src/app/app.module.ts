import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FiltroComponent } from './acesso/filtro/filtro.component';
import { GridComponent } from './acesso/grid/grid.component';
import { AcessoComponent } from './acesso/acesso.component';
import { TransacaoComponent } from './transacao/transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FiltroComponent,
    GridComponent,
    AcessoComponent,
    TransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
