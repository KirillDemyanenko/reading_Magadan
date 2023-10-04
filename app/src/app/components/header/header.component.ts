import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TuiLinkModule, TuiButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public cart: CartService) {}
}
