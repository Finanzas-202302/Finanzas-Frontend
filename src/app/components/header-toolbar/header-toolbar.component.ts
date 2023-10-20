import { Component, OnInit } from '@angular/core';
import { SharedStateService } from '../../../shared/sidebar-state.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css'],
})
export class HeaderToolbarComponent implements OnInit {
  selectedOption: string = '';
  description: string = '';
  showHeader: boolean = false;

  constructor(private sharedStateService: SharedStateService) {}

  ngOnInit() {
    this.sharedStateService.selectedOption$.subscribe((option) => {
      switch (option) {
        case 'R':
          this.selectedOption = 'Resumen semanal';
          this.description =
            'Obtenga un resumen de sus transacciones semanales en línea aquí.';
          break;
        case 'C':
          this.selectedOption = 'Calcular crédito vehicular';
          this.description =
            'Cálcule el crédito vehicular de su cliente en línea aquí.';
          break;
        case 'U':
          this.selectedOption = 'Mis clientes';
          this.description =
            'Observe el listado de sus clientes en línea aquí.';
          break;
        case 'S':
          this.selectedOption = 'Ajustes';
          this.description = 'Realice ajustes del sistema en línea aquí.';
          break;
        default:
          this.selectedOption = '';
          this.description = '';
          break;
      }
      this.showHeader = this.selectedOption !== '';
    });
  }
}
