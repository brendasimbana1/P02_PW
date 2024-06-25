import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Importa HttpClientModule y las funciones necesarias
import { Routes, RouterModule } from '@angular/router';
import { GastoService } from './services/gasto.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { FormsModule } from '@angular/forms';
import { ImpuestosComponent } from './components/impuestos/impuestos.component';

const rutas: Routes = [
  { path: 'informacion', component: InformacionComponent },
  { path: 'impuestos', component: ImpuestosComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'formulario', component: FormularioComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    FormularioComponent,
    ReporteComponent,
    ImpuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutas) 
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
