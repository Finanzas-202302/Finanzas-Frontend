import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared/shared-data.service';

@Component({
  selector: 'app-calculateview2',
  templateUrl: './calculateview2.component.html',
  styleUrls: ['./calculateview2.component.css'],
})
export class Calculateview2Component {
  periodoGraciaTipo: string = '';
  periodoGraciaMeses: number = 0;
  seguroDesgravamen: number = 0;
  seguroDesgravamenTipo: string = '';
  cok: number = 0;
  gastosNotarialesRegistrales: number = 0;
  otrosCostosIniciales: number = 0;
  costosGastosPeriodicos: number = 0;
  gastosAdministracion: number = 0;
  otrosCostosFinales: number = 0;
  constructor(private router: Router, private sharedData: SharedDataService) {
    this.sharedData.data$.subscribe((data) => {
      this.periodoGraciaTipo = data.periodoGraciaTipo;
      this.periodoGraciaMeses = data.periodoGraciaMeses;
      this.seguroDesgravamen = data.seguroDesgravamen;
      this.seguroDesgravamenTipo = data.seguroDesgravamenTipo;
      this.cok = data.cok;
      this.gastosNotarialesRegistrales = data.gastosNotarialesRegistrales;
      this.otrosCostosIniciales = data.otrosCostosIniciales;
      this.costosGastosPeriodicos = data.costosGastosPeriodicos;
      this.gastosAdministracion = data.gastosAdministracion;
      this.otrosCostosFinales = data.otrosCostosFinales;
    });
  }

  setValues() {
    this.sharedData.setData({
      periodoGraciaTipo: this.periodoGraciaTipo,
      periodoGraciaMeses: this.periodoGraciaMeses,
      seguroDesgravamen: this.seguroDesgravamen,
      seguroDesgravamenTipo: this.seguroDesgravamenTipo,
      cok: this.cok,
      gastosNotarialesRegistrales: this.gastosNotarialesRegistrales,
      otrosCostosIniciales: this.otrosCostosIniciales,
      costosGastosPeriodicos: this.costosGastosPeriodicos,
      gastosAdministracion: this.gastosAdministracion,
      otrosCostosFinales: this.otrosCostosFinales,
    });
    console.log(this.sharedData.getDataSnapshot());
  }

  onPeriodoGraciaTipoChange(value: string) {
    this.periodoGraciaTipo = value;
  }

  onPeriodoGraciaMesesChange(value: number) {
    this.periodoGraciaMeses = value;
  }

  onSeguroDesgravamenChange(value: number) {
    this.seguroDesgravamen = value;
  }

  onSeguroDesgravamenTipoChange(value: string) {
    this.seguroDesgravamenTipo = value;
  }

  onCOKChange(value: number) {
    this.cok = value;
  }

  onGastosNotarialesRegistralesChange(value: number) {
    this.gastosNotarialesRegistrales = value;
  }

  onOtrosCostosInicialesChange(value: number) {
    this.otrosCostosIniciales = value;
  }

  onCostosGastosPeriodicosChange(value: number) {
    this.costosGastosPeriodicos = value;
  }

  onGastosAdministracionChange(value: number) {
    this.gastosAdministracion = value;
  }

  onOtrosCostosFinalesChange(value: number) {
    this.otrosCostosFinales = value;
  }

  /*updateSharedData() {
    this.sharedData.data.periodoGraciaTipo = this.periodoGraciaTipo;
    this.sharedData.data.periodoGraciaMeses = this.periodoGraciaMeses;
    this.sharedData.data.seguroDesgravamen = this.seguroDesgravamen;
    this.sharedData.data.seguroDesgravamenTipo = this.seguroDesgravamenTipo;
    this.sharedData.data.cok = this.cok;
    this.sharedData.data.gastosNotarialesRegistrales =
      this.gastosNotarialesRegistrales;
    this.sharedData.data.otrosCostosIniciales = this.otrosCostosIniciales;
    this.sharedData.data.costosGastosPeriodicos = this.costosGastosPeriodicos;
    this.sharedData.data.gastosAdministracion = this.gastosAdministracion;
    this.sharedData.data.otrosCostosFinales = this.otrosCostosFinales;
  }*/

  prevStep() {
    this.setValues();
    this.router.navigate(['/calculate']);
  }
  nextStep() {
    this.setValues();
    this.router.navigate(['/calculate3']);
  }
}
