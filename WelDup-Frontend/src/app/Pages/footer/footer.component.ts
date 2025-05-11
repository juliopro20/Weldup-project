import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Partner = ['EliteWelding SA', 'Ndogmo Sudour', 'Jame Welding', 'Iron Tech Welding']
  products = ['Axes', 'Nail Bars', 'Iron Gates', 'Diggers']
  icons = [
    'https://cdn-icons-png.freepik.com/256/15047/15047435.png?uid=R108985352&ga=GA1.1.474556739.1722353286&semt=ais_hybrid',
    'https://cdn-icons-png.freepik.com/256/3670/3670151.png?uid=R108985352&ga=GA1.1.474556739.1722353286&semt=ais_hybrid',
    'https://cdn-icons-png.freepik.com/256/2111/2111463.png?uid=R108985352&ga=GA1.1.474556739.1722353286&semt=ais_hybrid',
    'https://cdn-icons-png.freepik.com/256/733/733585.png?uid=R108985352&ga=GA1.1.474556739.1722353286&semt=ais_hybrid',
    'https://cdn-icons-png.freepik.com/256/3938/3938026.png?uid=R108985352&ga=GA1.1.474556739.1722353286&semt=ais_hybrid',
  ]
}
