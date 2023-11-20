import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { ClientService } from 'src/app/services/client.service';
import { ClientModule } from 'src/app/models/client.module';
import { CreateClientComponent } from '../create-client/create-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'dni', 'vehicle', 'actions'];
  dataSource!: MatTableDataSource<ClientModule>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clientService: ClientService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.clientService.getList().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }
  // En tu componente TypeScript
  verCliente(clientId: number): void {
    this.clientService.getItem(clientId.toString()).subscribe(
      (cliente) => {
        // Lógica para mostrar detalles del cliente (por ejemplo, abrir un modal)
        console.log('Cliente obtenido:', cliente);
      },
      (error) => {
        console.error('Error al obtener el cliente:', error);
        // Puedes manejar el error según tus necesidades
      }
    );
    console.log(`Ver cliente con ID: ${clientId}`);
  }

  eliminarCliente(clientId: number): void {
    this.clientService.deleteItem(clientId.toString()).subscribe(
      () => {
        // Lógica después de eliminar el cliente (puedes recargar la lista, etc.)
        console.log('Cliente eliminado con éxito.');
      },
      (error) => {
        console.error('Error al eliminar el cliente:', error);
        // Puedes manejar el error según tus necesidades
      }
    );
    console.log(`Eliminar cliente con ID: ${clientId}`);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

