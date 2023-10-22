import { Component } from '@angular/core';
import { SharedStateService } from '../../../shared/sidebar-state.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

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
  //ngOnInit(): void {}
}
