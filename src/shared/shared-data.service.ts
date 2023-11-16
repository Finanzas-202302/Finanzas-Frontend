import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private initialData: any = {
    periodoGraciaTipo: '',
    periodoGraciaMeses: 0,
    seguroDesgravamen: '',
    seguroDesgravamenTipo: '',
    cok: 0,
    gastosNotarialesRegistrales: 0,
    otrosCostosIniciales: 0,
    costosGastosPeriodicos: 0,
    gastosAdministracion: 0,
    otrosCostosFinales: 0,
    searchClient: '',
    selectedCurrency: '',
    vehicleValue: 0,
    selectedInitialPie: 0,
    selectedCredit: 0,
    selectedVFMG: 0,
    selectedLoanTerm: 0,
    selectedInterestRateType: '',
    interestRate: 0,
  };

  public data: BehaviorSubject<any> = new BehaviorSubject<any>(
    this.initialData
  );
  public data$: Observable<any> = this.data.asObservable();

  setData(data: any) {
    const currentData = { ...this.data.value, ...data };
    this.data.next(currentData);
  }

  getDataSnapshot(): any {
    return { ...this.data.value };
  }
}
