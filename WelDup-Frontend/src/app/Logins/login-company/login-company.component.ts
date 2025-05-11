import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-company',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-company.component.html',
  styleUrl: './login-company.component.css'
})
export class LoginCompanyComponent {
  companyName: string = '';
  password: string = '';
  email: string = '';

  
  constructor(private router: Router) { };

  goToCompanyDashboard() {
    if(this.companyName && this.password && this.email) {
      this.router.navigate(['company-dashboard'])
    }
    else {
      alert('please fill in all the informations')
    }
  }
}
