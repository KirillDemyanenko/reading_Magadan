import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, TuiMarkerIconModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cart: CartService) {}
}
