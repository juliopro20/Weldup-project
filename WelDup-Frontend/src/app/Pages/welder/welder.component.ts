import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-welder',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatFormFieldModule, FooterComponent],
  templateUrl: './welder.component.html',
  styleUrl: './welder.component.css'
})
export class WelderComponent {


  itemstext = [
    {
      header: 'Home Made welding Repairs',
      text: 'You can find a welder or a team of welders which a dedicated in carrying on your repairs such as doors, gates, etc',
    },
    {
      header: 'Customize Design As You Want',
      text: 'As a client you are free to hired a welder for a work or projrct and can discuss your idea on how the product should look like',
    },
    {
      header: 'Specific Product Delivery',
      text: 'You can also order for a spicific product based on your location using our websites WelDup.',
    }
  ]

  welders = [
    {
      companyName: 'Bros Welding SA',
      contact: '+237-999-999-999',
      location: 'Buea',
      image: 'about.png'
    },
    {
      companyName: 'Elite Welding SA',
      contact: '+237-999-999-999',
      location: 'Buea',
      image: 'elite.png'
    },
    {
      companyName: 'Dogmo Sodure SA',
      contact: '+237-999-999-999',
      location: 'Dschange',
      image: 'chair-table.jpg'
    },
    {
      companyName: 'James Welding.Org',
      contact: '+237-999-999-999',
      location: 'Bamenda',
      image: 'about1.png'
    },
    {
      companyName: 'Sodure Express SA',
      contact: '+237-999-999-999',
      location: 'Douala',
      image: 'about2.png'
    }

  ]


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
    // Close the popup here if using a modal
  }
}
