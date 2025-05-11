import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
}
