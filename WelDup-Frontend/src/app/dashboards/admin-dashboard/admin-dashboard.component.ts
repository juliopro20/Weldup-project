import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Client } from '../../models/client.model'
import { Company } from '../../models/company.model'
import { ClientService } from '../../User-services/clients/client.service'
import { CompaniesService } from '../../User-services/companies/companies.service'

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  
  clients: Client[] = [];
  companies: Company[] =[]

  private clientService = inject(ClientService)
  private companyService = inject(CompaniesService)

  ngOnInit(): void {
    this.loadData();
  }

  // Helper to load both clients and companies
  loadData() {
    this.ClientData();
    this.CompanyData();
  }

  ClientData() { 
    this.clientService.getAllClientService().subscribe(
      (res: any) => {
        this.clients = res.data;
        this.updateBoxes();
      },
      (error: any) => {
        console.log('error: ', error)
      }
    )
  }

  CompanyData() { 
    this.companyService.getAllCompanyService().subscribe(
      (res: any) => {
        this.companies = res.data;
        this.updateBoxes();
      },
      (error: any) => {
        console.log('error: ', error)
      }
    )
  }

  boxes = [
    { header: 'Number of Clients', numbers: 0 },
    { header: 'Company Numbers', numbers: 0 },
    { header: 'Total Amount', numbers: 450000 },
  ];
  // Update dashboard boxes with current counts
  updateBoxes() {
    this.boxes = [
      { header: 'Number of Clients', numbers: this.clients.length },
      { header: 'Company Numbers', numbers: this.companies.length },
      { header: 'Total Amount', numbers: 450000 }, // Update as needed
    ];
  }

  // Deleting a user from the database
  deleteUserClient(client: Client) {
    if (window.confirm("Do you want to delete the Client " + client.fullName + " ?")) {
      this.clientService.deleteClient(client._id).subscribe(
        data => {
          this.ClientData();
        },
        error => {
          console.log('error: ', error)
        }
      )
    }
  }

  deleteUserCompany(company: Company) {
    if (window.confirm("Do you want to delete the Company " + company.companyName + " ?")) {
      this.companyService.deleteCompany(company._id).subscribe(
        data => {
          this.CompanyData();
        },
        error => {
          console.log('error: ', error)
        }
      )
    }
  }

  // dashboards toggling
  currentPage: string = 'dashboard'
  changeTab(tabName: string) {
    this.currentPage = tabName;
  }

 


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
 