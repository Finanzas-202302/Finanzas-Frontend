import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ResultService } from 'src/app/services/result.service';
import { ResultModule } from 'src/app/models/result.module';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'periodNumber', 'prestamo', 'financiamiento', 'flujo_total', 'interes',
  'cuota_financiamiento', 'amortizacion', 'seguro_desgravamen'];
  dataSource!: MatTableDataSource<ResultModule>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private resultService: ResultService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.resultService.getList().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }
}
