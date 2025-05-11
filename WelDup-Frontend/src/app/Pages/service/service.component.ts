import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [MatIconModule, CommonModule, FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services = [
    {
      icon: 'view_list',
      heading: 'Product Listing',
      text: 'Create and manage listings for their welding products, including descriptions, specifications, images, and pricing.'
    },
    {
      icon: 'local_shipping',
      heading: 'Shipping and Logistics',
      text: 'Offer shipping and logistics services to streamline the purchasing process. ie ordering of product from a company and have a home delivary services'
    },
    {
      icon: 'map',
      heading: 'Analytics and Insights',
      text: 'Gain valuable insights into their platform performance, including website traffic, product views, and customer engagement.'
    },
    {
      icon: 'cast_connected',
      heading: 'Networking Opportunities',
      text: 'Connect with other welding organizations, industry professionals, and potential partners.',
    },
    {
      icon: 'payment',
      heading: 'Payment Gateway',
      text: 'Facilitate secure online payments for products and services.',
    },
    {
      icon: 'dashboard',
      heading: 'Customer Dashboards',
      text: 'Receive and manage customer inquiries, track leads, and build relationships with potential clients.',
    },
    
  ]
}
