import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css'
})
export class RegisterClientComponent {
  
  currentComponent: string ='step1';
  stepNumber: number = 1;
  isActive: boolean= true;

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }


  
}
