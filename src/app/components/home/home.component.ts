import { Component, OnInit } from '@angular/core';
import { SharedStateService } from '../../../shared/sidebar-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private sharedStateService: SharedStateService,
    private router: Router
  ) {}

  ngOnInit() {
    // Suscribe al cambio de opción en el servicio
    this.sharedStateService.selectedOption$.subscribe((option) => {
      this.handleNavigation(option);
    });
  }

  handleNavigation(option: string) {
    // Realiza la navegación según la opción seleccionada
    switch (option) {
      case 'R':
        //this.router.navigate(['/resumen']);
        break;
      case 'C':
        this.router.navigate(['/calculate']);
        break;
      case 'U':
        this.router.navigate(['/clients']);
        break;
      case 'S':
        //this.router.navigate(['/ajustes']);
        break;
      // Agrega más casos según sea necesario

      default:
        // Manejo por defecto
        break;
    }
  }
}
