import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedDataService } from '../../../shared/shared-data.service';

@Component({
  selector: 'app-calculate-view',
  templateUrl: './calculateview.component.html',
  styleUrls: ['./calculateview.component.css'],
})
export class CalculateViewComponent {
  searchClient: string = '';
  selectedCurrency: string = '';
  vehicleValue: number = 0;
  selectedInitialPie: number = 0;
  selectedCredit: number = 0;
  selectedVFMG: number = 0;
  selectedLoanTerm: number = 0;
  selectedInterestRateType: string = '';
  interestRate: number = 0;
  constructor(private router: Router, private sharedData: SharedDataService) {
    this.sharedData.data$.subscribe((data) => {
      this.searchClient = data.searchClient;
      this.selectedCurrency = data.selectedCurrency;
      this.vehicleValue = data.vehicleValue;
      this.selectedInitialPie = data.selectedInitialPie;
      this.selectedCredit = data.selectedCredit;
      this.selectedVFMG = data.selectedVFMG;
      this.selectedLoanTerm = data.selectedLoanTerm;
      this.selectedInterestRateType = data.selectedInterestRateType;
      this.interestRate = data.interestRate;
    });
  }

  setValues() {
    this.sharedData.setData({
      searchClient: this.searchClient,
      selectedCurrency: this.selectedCurrency,
      vehicleValue: this.vehicleValue,
      selectedInitialPie: this.selectedInitialPie,
      selectedCredit: this.selectedCredit,
      selectedVFMG: this.selectedVFMG,
      selectedLoanTerm: this.selectedLoanTerm,
      selectedInterestRateType: this.selectedInterestRateType,
      interestRate: this.interestRate,
    });
    console.log(this.sharedData.getDataSnapshot());
  }

  onSearchClientChange(value: string) {
    this.searchClient = value;
  }
  onCurrencyChange(value: string) {
    this.selectedCurrency = value;
  }
  onVehicleValueChange(value: number) {
    this.vehicleValue = value;
  }
  onInitialPieChange(value: number) {
    this.selectedInitialPie = value;
  }
  onCreditChange(value: number) {
    this.selectedCredit = value;
  }
  onVFMGChange(value: number) {
    this.selectedVFMG = value;
  }
  onLoanTermChange(value: number) {
    this.selectedLoanTerm = value;
  }
  onInterestRateTypeChange(value: string) {
    this.selectedInterestRateType = value;
  }
  onInterestRateChange(value: number) {
    this.interestRate = value;
  }

  /*updateSharedData() {
    this.sharedData = this.searchClient;
    this.sharedData.data.selectedCurrency = this.selectedCurrency;
    this.sharedData.data.vehicleValue = this.vehicleValue;
    this.sharedData.data.selectedInitialPie = this.selectedInitialPie;
    this.sharedData.data.selectedCredit = this.selectedCredit;
    this.sharedData.data.selectedVFMG = this.selectedVFMG;
    this.sharedData.data.selectedLoanTerm = this.selectedLoanTerm;
    this.sharedData.data.selectedInterestRateType =
      this.selectedInterestRateType;
    this.sharedData.data.interestRate = this.interestRate;
  }*/

  nextStep() {
    this.setValues();
    this.router.navigate(['/calculate2']);
  }
}
