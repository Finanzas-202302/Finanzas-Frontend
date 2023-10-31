import { Component } from '@angular/core';

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

  //Actualize the values upper with the values from the form selected by the user
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

  nextStep() {
    //call al onChanges methods to actualize the values
    this.onSearchClientChange(this.searchClient);
    this.onCurrencyChange(this.selectedCurrency);
    this.onVehicleValueChange(this.vehicleValue);
    this.onInitialPieChange(this.selectedInitialPie);
    this.onCreditChange(this.selectedCredit);
    this.onVFMGChange(this.selectedVFMG);
    this.onLoanTermChange(this.selectedLoanTerm);
    this.onInterestRateTypeChange(this.selectedInterestRateType);
    this.onInterestRateChange(this.interestRate);
    //print the values to the console
    console.log(this.searchClient);
    console.log(this.selectedCurrency);
    console.log(this.vehicleValue);
    console.log(this.selectedInitialPie);
    console.log(this.selectedCredit);
    console.log(this.selectedVFMG);
    console.log(this.selectedLoanTerm);
    console.log(this.selectedInterestRateType);
    console.log(this.interestRate);
    // Handle next button click event
  }
}
