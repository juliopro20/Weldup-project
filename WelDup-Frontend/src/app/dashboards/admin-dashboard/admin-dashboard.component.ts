import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  
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
    {header: 'Number of Clients', numbers: 450},
    {header: 'Company Numbers', numbers: 4},
    {header: 'Total Amount', numbers: 450000},
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
  

  registerClient = [
    {
      fullName: 'Nkambi Julius',
      email: 'nkambi@gmail.com',
      phoneNumber: '671770232',
      country: 'Cameroon',
      city: 'buea',
      passwords: '**********',

    },
    {
      fullName: 'Bill Kerry',
      email: 'billkerry@gmail.com',
      phoneNumber: '692345722',
      country: 'Cameroon',
      city: 'Dschang',
      passwords: '****',

    },
    {
      fullName: 'Ndeng Carlson',
      email: 'carlson20@gmail.com',
      phoneNumber: '674903445',
      country: 'cameroon',
      city: 'Douala',
      passwords: '*********',

    }
  ]

  registerCompany = [
    {
      fullName: 'Bros Welding SA',
      email: 'broswelding@gmail.com',
      phoneNumber: ' +237-999-999-999',
      country: 'Cameroon',
      city: 'Buea',
      passwords: '*********',

    },
    {
      fullName: 'Dogmo Soudure SA',
      email: 'dogmosoudure@gmail.com',
      phoneNumber: ' +237-999-999-999',
      country: 'Cameroon',
      city: 'Dschang',
      passwords: '**********',

    },
    {
      fullName: 'Elite Welding SA',
      email: 'elitewelding20@gmamil.com',
      phoneNumber: ' +237-999-999-999',
      country: 'Cameroon',
      city: 'Buea',
      passwords: '******',

    }
  ]
}
 