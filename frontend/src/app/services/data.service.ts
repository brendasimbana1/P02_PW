import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Impuesto } from '../models/impuesto.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'http://ec2-18-219-196-202.us-east-2.compute.amazonaws.com:3000';
  private jsonUrl = '../assets/categorias.json'; // Ruta al archivo JSON
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  } 
  guardarDatosLocalmente(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar-datos`, data);
  }
  guardarImpuestosLocalmente(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/guardar-impuestos`, data);
  }
  obtenerDatos(): Observable<Impuesto> {
    return this.http.get<Impuesto>(`${this.apiUrl}/obtener-datos`);
  }
}
