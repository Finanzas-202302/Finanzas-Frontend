import { Component } from '@angular/core';

export interface DatosUsuario {
  nombre: string;
  apellido: string;
  correo: string;
  dni: string;
  vehiculo: string;
}
const DATOS: DatosUsuario[] = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    correo: 'juan@example.com',
    dni: '12345678',
    vehiculo: 'Toyota',
  },
  {
    nombre: 'Pedro',
    apellido: 'Gómez',
    correo: 'a@a.com',
    dni: '87654321',
    vehiculo: 'Nissan',
  },
  {
    nombre: 'Maria',
    apellido: 'García',
    correo: '  ',
    dni: '12345678',
    vehiculo: 'Toyora',
  },
];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'correo',
    'dni',
    'vehiculo',
    'acciones',
  ];
  dataSource = DATOS;

  verRegistro(element: DatosUsuario) {
    // Lógica para ver el registro
    console.log('Ver', element);
  }

  editarRegistro(element: DatosUsuario) {
    // Lógica para editar el registro
    console.log('Editar', element);
  }

  eliminarRegistro(element: DatosUsuario) {
    // Lógica para eliminar el registro
    console.log('Eliminar', element);
  }
}
