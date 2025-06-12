import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Client } from '../../models/client.model'
import { Company } from '../../models/company.model'
import { ClientService } from '../../User-services/clients/client.service'
import { CompaniesService } from '../../User-services/companies/companies.service'
import { ProductsService } from '../../User-services/products/products.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Hire } from '../../models/hires';
import { HiresService } from '../../User-services/hires/hires.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  
  clients: Client[] = [];
  companies: Company[] =[]
  products: Product[] = []
  hires: Hire[] = []
    
  productCount: number = 0; // Track number of products
  
  //importing the product service
  private productService = inject(ProductsService)

  private clientService = inject(ClientService)
  private companyService = inject(CompaniesService)
  private hiresService = inject(HiresService)

  ngOnInit(): void {
    this.loadData();
  }

  // Helper to load both clients and companies
  loadData() {
    this.ClientData();
    this.CompanyData();
    this.productData();
    this.hiresData();
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
      { header: 'Clients', numbers: this.clients.length },
      { header: 'Companies', numbers: this.companies.length },
      { header: 'Total Amount', numbers: 450000 }, // Update as needed
    ];
  }

  // Fetch hires and output to frontend and CLI
    hiresData() {
      this.hiresService.getAllHiresService().subscribe(
        (res: any) => {
          this.hires = Array.isArray(res) ? res : (res.data || []); 
          console.log('Fetched hires:', this.hires);
        },
        (error: any) => {
          console.log('error: ', error);
          this.hires = []; 
        }
      );
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
  deleteHires(hire: Hire) {
    if (window.confirm("Do you want to delete the item " + hire.name + " ?")) {
      this.hiresService.deleteHire(hire._id).subscribe(
        data => {
          this.hiresData();
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

   //here are the codes for the products
   productData() {
    this.productService.getAllProductService().subscribe(
      (res: any) => {
        this.products = Array.isArray(res) ? res : (res.data || []);
        this.productCount = this.products.length; // Update product count
        console.log('Fetched products:', this.products);
      },
      (error: any) => {
        console.log('error: ', error);
        this.products = [];
        this.productCount = 0; // Reset product count on error
      }
    );
  }
    //to delete a product
    deleteProduct(product: Product) {
      if (window.confirm("Do you want to delete this Product " + product.itemName + " ?")) {
        this.productService.deleteProduct(product._id).subscribe(
          data => {
            this.productData(); // Refresh products and count after deletion
          },
          error => {
            console.log('error: ', error)
          }
        )
      }
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
  

}
 