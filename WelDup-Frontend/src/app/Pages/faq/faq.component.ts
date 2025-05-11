import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, CdkAccordionModule, MatIconModule, FooterComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  // arrays of the questions...
  accordion1 = [
    {
      key: 1,
      question1: 'How can I order for welding products?',
      asnwer1: 'You can browse our product catalog, select the items you want, and proceed to checkout. We offer various payment options for your convenience.'
    },
    { 
      key: 2, 
      question1: 'How can I find a welding company near me?', 
      asnwer1: 'You can use our search feature to find local welding companies by entering your location. We also provide a list of recommended providers based on your needs.'},
    { 
      key: 3, 
      question1: 'Do you offer bulk purchasing discounts?', 
      asnwer1:  'Yes, we offer discounts for bulk orders. Please contact our sales team for more information on pricing and availability.'},
    { 
      key: 4, 
      question1: 'Can I compare different welding products on your site?', 
      asnwer1:  'Absolutely! Our platform allows you to compare specifications, prices, and reviews of various welding products to find the best fit for your needs.'}
  ];

  
  accordion2 = [
    {
      key: 5,
      question2: 'What if I need technical support for a welding product?',
      answer2: 'We have a dedicated support team available to assist you with any technical questions or issues regarding our products. You can reach them via our contact page.',
    },
    {
      key: 6,
      question2: 'What are your shipping options and delivery times?',
      answer2: 'We provide several shipping options. Delivery times vary depending on your location and the shipping method selected during checkout.',
    },
    {
      key: 7,
      question2: 'Are there warranties on the products sold on your site?',
      answer2: 'Yes, most of our welding products come with manufacturer warranties. Please check the product details for specific warranty information.',
    },
    {
      key: 8,
      question2: 'Is there a mobile app for WelDup?',
      answer2: 'Currently, we do not have a mobile app, but our website is fully optimized for mobile devices, allowing you to browse and shop on the go.',
    }
  ];

  expandedIndex = 0;
}
