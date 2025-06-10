import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { ClientService } from '../../User-services/clients/client.service'

@Component({
  selector: 'app-login-client',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login-client.component.html',
  styleUrl: './login-client.component.css'
})
export class LoginClientComponent implements OnInit {

  fb = inject(FormBuilder) 
  clientService= inject(ClientService)
  router = inject(Router);
  loginClientForm !: FormGroup;

    ngOnInit(): void {
       this.loginClientForm = this.fb.group({
          email: ['', Validators.compose([Validators.required, Validators.email])],
          password: ['', Validators.required]
        })
    }

    ClientLogin() {
         this.clientService.loginClientService(this.loginClientForm.value)
    .subscribe({
      next: (res) =>{
        alert('Login Is Success');
        this.router.navigate(['client-dashboard']);
        this.loginClientForm.reset();
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
    
}
