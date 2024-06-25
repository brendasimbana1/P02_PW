import { Component } from '@angular/core';
import { Gasto } from '../../models/gasto.model';
import { GastoService } from '../../services/gasto.service';
import { User } from '../../models/user.model'; 

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  datos: Gasto[] | null = null;
  constructor(private gastoService:GastoService) {
    this.obtenerDatos();
  }
  obtenerDatos() {
    this.gastoService.obtenerGastos().subscribe(
      (response) => {
        console.log('Respuesta de obtenerDatos:', response);
        // Verifica que response sea un objeto válido de Impuesto
        if (response && typeof response === 'object') {
          this.datos = response; //  datos del Impuesto recibido
          this.usuarios=[];
        } else {
          console.error('La respuesta de obtenerDatos no es un objeto válido:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
  usuarios: User[] = [];
  cargarUsuarios(): void {
    this.gastoService.obtenerUsers().subscribe(data => {
      this.usuarios = data;
      this.datos = []; 
    });
  }
}
