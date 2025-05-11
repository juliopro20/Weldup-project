import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  productName: string;
  price: number;
  companyName: string,
  location: string,
  image: string,
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: Product[] = [
    {
      productName: 'Axes',
      price: 5000,
      companyName: 'EliteWelding SA',
      location: 'Yaounde-Melen',
      image: 'axes.jpg',
     
    },
    {
      productName: 'Iron Gate',
      price: 250000,
      companyName: 'Ndogmo Soudure',
      location: 'Dschange',
      image: 'gate2.jpg',
      
    },
    {
      productName: 'Door + windows',
      price: 60000,
      companyName: 'Jame Welding.Org',
      location: 'Buea',
      image: 'door-window.jpg',
     
    },
    {
      productName: 'Windows',
      price: 30000,
      companyName: 'Tchafack Soudure',
      location: 'Bafoussam',
      image: 'window1.jpg',
      
    },
  ]


  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  removeFromCart(item: Product) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }


  //routing to the other pages

  constructor(private router: Router) {}

  goToHome(){
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0,0);
    })
  }

  goToServices(){
    this.router.navigate(['/service']).then(() => {
      window.scrollTo(0,0);
    })
  }

  goToAbout(){
    this.router.navigate(['/about']).then(() => {
      window.scrollTo(0, 0);
    })
  }
  goToWelder(){
    this.router.navigate(['/welder']).then(() => {
      window.scrollTo(0, 0);
    })
  }

  //popup lines of code
  isFormOpen = false;

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }
  @Output() formSubmitted = new EventEmitter<any>();

  onSubmit(form: any) {
    this.formSubmitted.emit(form.value);
  }

  currentComponent: string ='momo';
  isActive: boolean= true;

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }


  //resposiveness for the cart table
  isCartOpen = false
  cartTable() {
    this.isCartOpen = true
  }
  closeCart() {
    this.isCartOpen = false;
  }


  //notification on carts added

  notif = 0;

  notification(): number {
    return this.notif+1
  }

  //ratings codes
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Output() ratingChange = new EventEmitter<number>();

  setRating(value: number): void {
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }

  get stars(): boolean[] {
      return Array(this.maxRating).fill(false).map((_, index) => index < this.rating);
  }
}
