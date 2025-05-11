import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent {
  currentComponent: string ='step1';
  stepNumber: number = 1;
  isActive: boolean= true;

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }
}
