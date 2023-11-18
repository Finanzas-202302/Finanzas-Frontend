import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogResultsComponent } from '../dialog-results/dialog-results.component';

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
  private dialog!: MatDialog;
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
    const dialogRef = this.dialog.open(DialogResultsComponent, {
      width: '80%', // especifica el ancho del diálogo
      height: '80%', // especifica la altura del diálogo
    });

    // Puedes suscribirte a eventos del cuadro de diálogo si es necesario
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Cuadro de diálogo cerrado', result);
    });

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
