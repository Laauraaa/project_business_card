import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { BusinessCardComponent } from './business-card/business-card.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusinessCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project_business_card';
}
