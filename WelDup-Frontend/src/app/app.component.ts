import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WelDup-app';

  constructor(private router: Router) {};

  isPresent(): boolean {
    return (this.router.url === '/product' || this.router.url === '/admin-dashboard' || this.router.url === '/client-dashboard' || this.router.url === '/company-dashboard');
  }

  toTop() {
    scrollTo(0,0)
  }
}
