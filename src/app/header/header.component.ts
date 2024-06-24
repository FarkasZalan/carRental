import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  adminLoggedIn: boolean = false;
  cartCount: number = 0;

  constructor(private router: Router) { }


  ngOnInit(): void {

  }

  navigateToAccount() {
    this.router.navigate(['/profile']);
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    this.router.navigate(['/auth']);
  }

  navigateToCart() {
    this.router.navigate(['/order/cart']);
  }

}
