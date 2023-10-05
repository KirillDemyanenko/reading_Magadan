import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiBlockStatusModule } from '@taiga-ui/layout';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    TuiMarkerIconModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiBlockStatusModule,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cart: CartService) {}
}
