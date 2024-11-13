import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRouterLinkDirective } from '../directives/custom-router-link.directive';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [RouterModule, CustomRouterLinkDirective],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  title = 'report';
}
