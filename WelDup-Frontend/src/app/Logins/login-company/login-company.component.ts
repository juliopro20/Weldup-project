import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { CompaniesService } from '../../User-services/companies/companies.service'

@Component({
  selector: 'app-login-company',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login-company.component.html',
  styleUrl: './login-company.component.css'
})
export class LoginCompanyComponent {
    fb = inject(FormBuilder) 
    companyService= inject(CompaniesService)
    router = inject(Router);
    loginCompanyForm !: FormGroup;
  
      ngOnInit(): void {
         this.loginCompanyForm = this.fb.group({
            companyName: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required]
          })
      }
  
      ClientLogin() {
           this.companyService.loginCompanyService(this.loginCompanyForm.value)
      .subscribe({
        next: (res) =>{
          alert('Login Is Success');
          this.router.navigate(['client-dashboard']);
          this.loginCompanyForm.reset();
        },
        error: (err)=>{
          console.log(err)
        }
      })
    }

}
