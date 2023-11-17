import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PaymentPlanService } from '../../services/payment-plan.service';

@Component({
  selector: 'app-dialog-results',
  templateUrl: './dialog-results.component.html',
  styleUrls: ['./dialog-results.component.css'],
})
export class DialogResultsComponent implements OnInit {
  displayedColumns: any = [
    'periodNumber',
    'dueDate',
    'prestamo',
    'financiamiento',
    'interes',
    'cuota_financiamiento',
    'amortizacion',
    'seguro_desgravamen',
  ];
  getColumnHeader(column: string): string {
    const headers: { [key: string]: string } = {
      periodNumber: 'Nro Periodo',
      dueDate: 'Fecha',
      prestamo: 'Préstamo',
      financiamiento: 'Financiamiento',
      interes: 'Interes',
      cuota_financiamiento: 'Cuota financiamiento',
      amortizacion: 'Amortizacion',
      seguro_desgravamen: 'Seguro desgravamen',
      // Agrega más propiedades según sea necesario
    };
    return headers[column] || column;
  }
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paymentPlanService: PaymentPlanService) {}

  ngOnInit(): void {
    this.fetchPaymentPlans();
  }

  fetchPaymentPlans() {
    this.paymentPlanService.getAllPaymentPlans().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }
}
