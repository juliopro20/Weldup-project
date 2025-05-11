import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-client.component.html',
  styleUrl: './login-client.component.css'
})
export class LoginClientComponent {

  username: string ='';
  password: string = '';

  constructor(private router: Router) {}

  goToClientDashboard() {
    
    if(this.username && this.password) {
      this.router.navigate(['client-dashboard']);
    }
    else {
      alert('please fill all the informations')
    }
  }
}
