import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HiresService } from '../../User-services/hires/hires.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welder',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatFormFieldModule, FooterComponent, ReactiveFormsModule],
  templateUrl: './welder.component.html',
  styleUrl: './welder.component.css'
})
export class WelderComponent {

    private router = inject(Router)
    fb = inject(FormBuilder)
    createHireForm !: FormGroup;
    
  
    //importing the hire service
    private hiresService = inject(HiresService)
  
    ngOnInit(): void{
      this.createHireForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', Validators.required],
        city: ['', Validators.required],
        location: ['', Validators.required],
        
      })
    }

    createHires(){
    this.hiresService.createHireService(this.createHireForm.value)
      .subscribe({
        next: ()=>{
          alert("Hire Created");
          this.createHireForm.reset();
          this.router.navigate(['/home']);
        },
        error: (err)=>{
          console.log(err)
        }
      })
  }
  
    





  itemstext = [
    {
      header: 'Home Made welding Repairs',
      text: 'You can find a welder or a team of welders which a dedicated in carrying on your repairs such as doors, gates, etc',
    },
    {
      header: 'Customize Design As You Want',
      text: 'As a client you are free to hired a welder for a work or projrct and can discuss your idea on how the product should look like',
    },
    {
      header: 'Specific Product Delivery',
      text: 'You can also order for a spicific product based on your location using our websites WelDup.',
    }
  ]

  welders = [
    {
      companyName: 'Bros Welding SA',
      contact: '+237-672-768-789',
      location: 'Buea',
      image: 'about.png'
    },
    {
      companyName: 'Elite Welding SA',
      contact: '+237-673-768-789',
      location: 'Buea',
      image: 'elite.png'
    },
    {
      companyName: 'Dogmo Sodure SA',
      contact: '+237-982-678-890',
      location: 'Dschange',
      image: 'chair-table.jpg'
    },
    {
      companyName: 'James Welding.Org',
      contact: '+237-690-033-998',
      location: 'Bamenda',
      image: 'about1.png'
    },
    {
      companyName: 'Sodure Express SA',
      contact: '+237-699-989799',
      location: 'Douala',
      image: 'about2.png'
    }

  ]


  isFormOpen = false;

  
  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }
  closeOnsubmitForm(){
    alert("Hire Created Successfully");
    this.isFormOpen = false;
  }
}
