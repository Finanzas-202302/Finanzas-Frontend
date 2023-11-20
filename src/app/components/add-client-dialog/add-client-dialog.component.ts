import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent {
  clientForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddClientDialogComponent>,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.clientForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      dni: ['', Validators.required],
      vehicle: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }
  getCurrentUserId(): string | null{
    // Lógica para obtener el userId del usuario autenticado
    return this.tokenService.getUserId(); // Ajusta según tu implementación
  }
  onSubmit() {
    if (this.clientForm.valid) {
      // Realiza acciones adicionales si es necesario antes de cerrar el diálogo
      this.dialogRef.close(this.clientForm.value);
    }
  }
}
