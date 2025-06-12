import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../User-services/products/products.service'

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [FormsModule, MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './company-dashboard.component.html',
  styleUrl: './company-dashboard.component.css'
})
export class CompanyDashboardComponent implements OnInit {

  private router = inject(Router)
  fb = inject(FormBuilder)
  createProductForm !: FormGroup;
  products: Product[] = []
  productCount: number = 0; // Track number of products

  //importing the product service
  private productService = inject(ProductsService)

  ngOnInit(): void{
    this.createProductForm = this.fb.group({
      itemName: ['', Validators.required],
      amount: ['', Validators.required],
      companyName: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      productImage: ['', Validators.required]
    })

    this.productData()
  }

  // Fetch products and output to frontend and CLI
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

  createProducts(){
    this.productService.createProductService(this.createProductForm.value)
      .subscribe({
        next: (res)=>{
          alert("Product Cart Created");
          this.createProductForm.reset();
          this.productData(); // Refresh products and count after adding
        },
        error: (err)=>{
          console.log(err)
        }
      })
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

  items =[
    {header: 'Number of Products', numbers: 0}, // Will update in ngOnInit
    {header: 'Products bought', numbers: 8},
  ]

  // Update items[0].numbers whenever productCount changes
  ngDoCheck() {
    this.items[0].numbers = this.productCount;
  }


  goToProducts() {
    this.router.navigate(['/product']).then(()=>
      window.scrollBy(0,0)
    )
  }

  
// dashboards toggling
  //for the dashboard page
  currentPage: string = 'dashboard'
  changeTab(tabName: string) {
    this.currentPage = tabName;
  }

  //for the profile page
  profilePage: string = 'profileview'

  profileChangeTab(profiletab: string) {
    this.profilePage = profiletab 

  }
  //for the product page
  
  productPage: string = 'productList'

  productChangeTab(producttab: string) {
    this.productPage = producttab 

  }

  confirm() {
    alert("Product Created Successfully");
    this.createProductForm.reset();
    this.productChangeTab('productList');
  }


  //tables arrays of objects  

  //codes for the profile page.

  imgurl: string = 'profile.png';
  username: string = 'Name';
  email: string = 'example@gmail.com';
  number: string = '+237-999-999-999';
  country: string = 'Cameroon';
  city: string = 'Yaounde'


}
