import { Component } from '@angular/core';
import { Car } from '../../car/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cars: Car[] = [];
  selectedSortOption: string = "";
  filterBySearch: string = "";
  filteredCars: Car[] = [];

  applyFilter() {

  }

  sortCars(option: string) {
    switch (option) {
      case 'nameASC':
        this.filteredCars.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDESC':
        this.filteredCars.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'priceASC':
        this.filteredCars.sort((a, b) => a.price - b.price);
        break;
      case 'priceDESC':
        this.filteredCars.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  }
}
