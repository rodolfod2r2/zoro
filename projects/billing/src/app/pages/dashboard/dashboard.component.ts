import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRouterLinkDirective } from '../../directives/custom-router-link.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CustomRouterLinkDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'dashboard';
}
