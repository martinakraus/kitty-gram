import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // constructor(private readonly authService: AuthService) {
  //   setInterval(() => {
  //     this.authService.getAccessTokenSilently().subscribe(console.log);
  //     console.log('Access token refreshed');
  //   }, 5000);
  // }
}
