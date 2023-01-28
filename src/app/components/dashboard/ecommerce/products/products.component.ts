import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  customOptions = {
    loop: false,
    stagePadding: 0,
    center: true,
    mergeFit: true,
    nav: false,

    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  products = [
    {
      name: 'Wellington Shoes',
      class: 'bg-secondary',
      price: '$325.25',
      image: 'assets/images/dashboard-2/wellington-shoes.png',
      icon: 'fa fa-star',
      badge: 'New',
    },
    {
      name: 'Apple Smartwatch',
      price: '$1185.99',
      badge: 'hot',
      class: 'bg-primary',

      image: 'assets/images/dashboard-2/apple-watch.png',
    },
    {
      name: 'Wellington Shoes',
      price: '$325.25',
      class: 'bg-secondary',

      image: 'assets/images/dashboard-2/wellington-shoes.png',
      badge: 'New',
    },
    {
      name: 'Apple Smartwatch',
      price: '$1185.99',
      badge: 'hot',
      class: 'bg-primary',

      image: 'assets/images/dashboard-2/apple-watch.png',
    },
  ];
}
