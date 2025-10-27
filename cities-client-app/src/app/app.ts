import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private authService = inject(AuthService);
  private router = inject(Router);

  protected readonly title = signal('Cities Manager App');

  get loggedOut() {
    return !this.authService.currentUserName();
  }

  onLogout(event: PointerEvent) {
    event.preventDefault();
    this.authService.logout().subscribe({
      next: (response) => { 
        this.authService.currentUserName.set(null);

        localStorage.removeItem('token');

        this.router.navigate(['/login']);
      },
      error: (error) => { console.log(error); },
    });
  }
}
