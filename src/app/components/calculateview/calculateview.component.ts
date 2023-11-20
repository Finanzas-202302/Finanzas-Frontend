import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { HttpClient } from '@angular/common/http';
import { CreditModule } from 'src/app/models/credit.module';
import { ClientModule } from 'src/app/models/client.module';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-calculateview',
  templateUrl: './calculateview.component.html',
  styleUrls: ['./calculateview.component.css']
})

export class CalculateviewComponent implements OnInit{
  clientControl = new FormControl();
  clients: ClientModule[] = []; // Reemplaza 'any[]' con el tipo real de tus usuarios
  filteredClients!: Observable<any[]>;

  creditForm!: FormGroup;

  constructor(private clientService: ClientService, private creditService:CreditService) {
    this.creditForm = new FormGroup({
      coin: new FormControl('', Validators.required),
      term_of_loan: new FormControl('', Validators.required),
      cuota_inicial_percentage: new FormControl('', Validators.required),
      vfmg_percentage: new FormControl('', Validators.required),
      cost_vehicle: new FormControl('', Validators.required),
    });
    this.creditForm.setValue({
      coin: 'soles', // O el valor predeterminado que desees
      term_of_loan: '',
      cuota_inicial_percentage: '',
      vfmg_percentage: '',
      cost_vehicle: '',
    });
  }

  ngOnInit() {
    this.clientService.getList().subscribe((data: any) => {
      this.clients = data;
      this.filteredClients = this.clientControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filterUsers(value))
      );
    });
  }

  private _filterUsers(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.clients.filter(
      (client) =>
      client.firstname.toLowerCase().includes(filterValue) ||
      client.lastname.toLowerCase().includes(filterValue)
    );
  }

  submitCreditForm() {
    if (this.creditForm.valid) {
      const formData = this.creditForm.value;
      const termOfLoanControl = this.creditForm.get('term_of_loan');
  
      if (termOfLoanControl && termOfLoanControl.value) {
        const creditData: CreditModule = {
          coin: formData.coin, 
        interest_rate: formData.interest_rate, 
        periodo_de_capitalizacion: formData.periodo_de_capitalizacion,
        capitalizacion_especial: 0,
        plazo_tasa_interes: formData.plazo_tasa_interes,
        plazo_interes_especial: 0,
        interest_rate_percentage: formData.interest_rate_percentage,
        cuota_inicial_percentage: formData.cuota_inicial_percentage,
        cost_vehicle: formData.cost_vehicle,
        fecha_prestamo: new Date().toISOString(),
        term_of_loan: formData.term_of_loan,
        seguro_desgravamen: formData.seguro_desgravamen,
        vfmg_percentage: formData.vfmg_percentage,
        credit_percentage: formData.credit_percentage,
        type_grace_period: formData.type_grace_period,
        grace_period: formData.grace_period,
        cok: formData.cok,
        costos_notariales: formData.costos_notariales,
        costos_notariales_bool: formData.costos_notariales_bool,
        costos_registrales: formData.costos_registrales,
        costos_registrales_bool: formData.costos_notariales_bool,
        tasacion: formData.tasacion,
        tasacion_bool: formData.tasacion_bool,
        estudio_de_titulos: formData.estudio_de_titulos,
        estudio_de_titulos_bool: formData.estudio_de_titulos_bool,
        otros_costes: formData.otros_costes,
        otros_costes_bool: formData.otros_costes_bool,
        portes: formData.portes,
        gastos_administrativos: formData.gastos_administrativos,
        comision: formData.comision,
        penalidad: formData.penalidad,
        comunicacion: formData.comunicacion,
        seguridad: formData.seguridad,
        otros: formData.otros,
        cliendId: formData.cliendId,
        van: 0
        };
  
        // Realiza las acciones necesarias con los datos del formulario
        console.log('Datos del formulario:', creditData);
        const clientId = this.clientControl.value?.id;
        if (clientId) {
          this.creditService.createResult(clientId).subscribe(
            (result: any) => {
              console.log('Resultado generado:', result);
              // Realiza las acciones necesarias con el resultado generado
            },
            (error) => {
              console.error('Error al generar el resultado:', error);
            }
          );
        } else {
          console.error('No se seleccionó un cliente válido.');
        }
      }
    }
  }
  

  getRangeErrorMessage() {
    return 'Debes ingresar un número válido';
  }
}