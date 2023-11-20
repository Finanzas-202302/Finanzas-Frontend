import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientModule } from '../../models/client.module';
import { CreditModule } from '../../models/credit.module';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  newClient: ClientModule = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    dni: 0,
    vehicle: '',
    userId: 1,
  };

  constructor(
    private dialogRef: MatDialogRef<CreateClientComponent>,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {}

  isFormValid(): boolean {
    return (
      this.newClient.firstname !== '' &&
      this.newClient.lastname !== '' &&
      this.newClient.email !== '' && this.newClient.email.includes('@') &&
      this.newClient.dni !== 0 && this.newClient.dni.toString().length === 8 &&
      this.newClient.vehicle !== '' &&
      this.newClient.userId !== 0
    );
  }

  onSaveClick(): void {
    // Aquí puedes realizar alguna validación de datos antes de enviar la solicitud al servidor

    this.clientService.createItem(this.newClient).subscribe(
      (response) => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Cliente creado con éxito:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al crear cliente:', error);
        // Puedes manejar el error y mostrar un mensaje al usuario si es necesario
      }
    );
  }

  onCancelClick(): void {
    console.log(this.newClient);
    this.dialogRef.close();
  }
}

