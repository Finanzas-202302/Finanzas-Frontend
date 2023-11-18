import { Component } from '@angular/core';
import { SharedStateService } from '../../../shared/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private sharedStateService: SharedStateService) {}

  selectOption(option: string) {
    this.sharedStateService.setSelectedOption(option);
  }
}
