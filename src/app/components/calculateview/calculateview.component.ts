import { Component, OnInit } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
import { ClientModule } from 'src/app/models/client.module';
import { ClientService } from 'src/app/services/client.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculateview',
  templateUrl: './calculateview.component.html',
  styleUrls: ['./calculateview.component.css']
})
export class CalculateviewComponent implements OnInit {
  myControl = new FormControl();
  clients: ClientModule[] = [];
  filteredClients: ClientModule[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    // Obtener la lista de clientes al inicializar el componente
    this.clientService.getList().subscribe((data: ClientModule[] | any) => {
      if (Array.isArray(data)) {
        this.clients = data;
        this.filteredClients = data;
      }
    });

    // Filtrar la lista de clientes mientras se escribe en el input
    this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterClients(value))
    ).subscribe(filteredClients => {
      this.filteredClients = filteredClients;
    });
  }

  private _filterClients(value: string): ClientModule[] {
    const filterValue = value.toLowerCase();

    return this.clients.filter(client =>
      client.firstname.toLowerCase().includes(filterValue) || client.lastname.toLowerCase().includes(filterValue)
    );
  }

  displayFn(client: ClientModule): string {
    return client ? `${client.firstname} ${client.lastname}` : '';
  }
}
