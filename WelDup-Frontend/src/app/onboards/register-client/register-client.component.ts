import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { confirmPasswordValidator } from '../../../app/validators/confirm-password.validator'
import { Router, RouterModule } from '@angular/router';
import { ClientService } from '../../User-services/clients/client.service'

@Component({
  selector: 'app-register-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css'
})
export class RegisterClientComponent implements OnInit {

  fb = inject(FormBuilder) 
  clientService= inject(ClientService)
  router = inject(Router);
  registerClientForm !: FormGroup;

  ngOnInit(): void {
    this.registerClientForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required],
    },
     {
      validator:confirmPasswordValidator('password', 'confirmPassword')
    }
  )
  }
  
  registerClient(){
    
     this.clientService.registerClientService(this.registerClientForm.value)
    .subscribe({
      next: (res)=>{
        alert("User Created");
        this.registerClientForm.reset();//reset the form after registration
        this.router.navigate(['client-dashboard'])
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


 

