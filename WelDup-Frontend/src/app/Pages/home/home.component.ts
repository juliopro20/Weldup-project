import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  // My Date used for string interpolation and directives(*ngFor, *ngIf)
  reviews = [
    {
      personName: 'Nkambi Julius',
      location: 'Yaounde',
      text: 'I recently bought a new door on Weldup and I am so glad I did! The selection was great, the seller was helpful, and the door arrived quickly. It is perfect for my home and looks fantastic. I definitely recommend Weldup for anyone looking to buy a door online.',
      imagePerson: 'https://img.freepik.com/free-photo/prosperous-businessman-keeps-hands-crossed-has-satisfied-expression_273609-16711.jpg?uid=R108985352&ga=GA1.1.474556739.1722353286&semt=ais_hybrid'
    },
    {
      personName: 'EliteWelding SA',
      location: 'Yaounde',
      text: 'Weldup has been a game-changer for our welding business. The platform has helped us connect with countless potential customers and generate new leads. We have seen a significant increase in sales since joining Weldup, and we are grateful for the opportunity to showcase our products to a wider audience',
      imagePerson: 'https://img.freepik.com/free-photo/worker-working-suit-fixing-metal-rack_140725-11110.jpg?uid=R108985352&ga=GA1.1.474556739.1722353286&semt=ais_hybrid'
    },
  ]


  contacts = [
    {
      icon: 'place',
      header: 'Location',
      text: 'Connect with Us',
      info: 'Buea Cameroon'
    },
    {
      icon: 'email',
      header: 'Email Us',
      text: 'From Your Email app',
      info: 'j-tech@gmail.com'
    },
    {
      icon: 'phone',
      header: 'Contact Us',
      text: 'Call or chat by WHATSAPP',
      info: '+237 671770232'
    }
  ]


  // My Functions

  constructor(private router: Router) {};
  
  goToServices() {
    this.router.navigate(['/service']).then(() => {
      window.scrollTo(0,0);
    })
  }

  goToProduct() {
    this.router.navigate(['/product']).then(() => {
      window.scrollTo(0,0);
    })
  }

  goToContact() {
    this.router.navigate(['/contact']).then(() => {
      window.scrollTo(0,0);
    })
  }
  registerAsClient() {
    this.router.navigate(['/registerClient']).then(() => {
      window.scrollTo(0,0);
    })
  }
  registerAsCompany() {
    this.router.navigate(['/registerCompany']).then(() => {
      window.scrollTo(0,0);
    })
  }
  goToAbout() {
    this.router.navigate(['/about']).then(() => {
      window.scrollTo(0,0);
    })
  }
  
}
