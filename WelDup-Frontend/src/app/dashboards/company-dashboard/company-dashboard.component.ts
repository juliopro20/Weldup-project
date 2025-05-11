import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [FormsModule, MatIconModule, CommonModule],
  templateUrl: './company-dashboard.component.html',
  styleUrl: './company-dashboard.component.css'
})
export class CompanyDashboardComponent {
  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/product']).then(()=>
      window.scrollBy(0,0)
    )
  }

  // dashboards toggling

  currentPage: string = 'dashboard'
  changeTab(tabName: string) {
    this.currentPage = tabName;
  }


  //tables arrays of objects

  items =[
    {header: 'Number of items bought', numbers: 8},
    {header: 'Total Amount paid', numbers: 450000},
  ]


  orders = [
    {
      itemName: 'Axes',
      amount: '5000frs',
      companyName: 'Elite Welding.Org',
      country: 'Cameroon',
      city: 'Buea',
      date: '20/02/2023',
      status: 'Shipped',

    },
    {
      itemName: 'diggers',
      amount: '8000frs',
      companyName: 'Elite Welding.Org',
      country: 'Cameroon',
      city: 'Buea',
      date: '20/02/2023',
      status: 'loading',

    },
    {
      itemName: 'Windows',
      amount: '70,000frs',
      companyName: 'dschang soudure SA',
      country: 'Cameroon',
      city: 'dschang',
      date: '20/02/2023',
      status: 'shipped',

    }
  ]
  

  //codes for the profile page.

  imgurl: string = 'profile.png';
  username: string = 'Name';
  email: string = 'example@gmail.com';
  number: string = '+237-999-999-999';
  country: string = 'Cameroon';
  city: string = 'Yaounde'

  profilePage: string = 'profileview'

  profileChangeTab(profiletab: string) {
    this.profilePage = profiletab 

  }

}
