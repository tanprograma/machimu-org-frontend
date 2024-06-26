import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'machimu-org-frontend';
  logo = 'MACHIMU TIMBER LLC';
  outlet = this.appService.appStore().outlet;
  constructor(private appService: AppService) {}
}
