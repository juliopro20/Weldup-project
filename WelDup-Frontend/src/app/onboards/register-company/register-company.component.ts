import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { confirmPasswordValidator } from '../../../app/validators/confirm-password.validator'
import { Router, RouterModule } from '@angular/router';
import { CompaniesService } from '../../User-services/companies/companies.service'

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent implements OnInit {

  fb = inject(FormBuilder) 
  clientService= inject(CompaniesService)
  router = inject(Router);
  registerCompanyForm !: FormGroup;

    ngOnInit(): void {
      this.registerCompanyForm = this.fb.group({
        companyName: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        licence: ['', Validators.required],
        role: ['', Validators.required],
      },
       {
        validator:confirmPasswordValidator('password', 'confirmPassword')
      }
    )
    }

  registerCompany() {
     this.clientService.registerCompanyService(this.registerCompanyForm.value)
    .subscribe({
      next: (res)=>{
        alert("User Created");
        this.registerCompanyForm.reset();//reset the form after registration
        this.router.navigate(['company-dashboard'])
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }


  //the logic to navigate through the different forms

  currentComponent: string ='step1';
  isActive: boolean= true;

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }

}
