import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

  username: string = '';
  password: string = '';
  pin: string = '';

  
  constructor(private router: Router) { };

  goToAdminDashboard() {
    if (this.username && this.password && this.pin) {
      this.router.navigate(['admin-dashboard'])
    }
    else {
      alert('please fill all the informations')
    }
  }

}
