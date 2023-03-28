import { Component } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss'],
})
export class AvatarsComponent {
  images = [
    {
      imgSize: '90',
      img: 'assets/images/avtar/7.jpg',
      shape: 'b-r-30',
    },
    {
      imgSize: '80',
      img: 'assets/images/avtar/7.jpg',
      shape: 'b-r-35',
    },
    {
      imgSize: '70',
      img: 'assets/images/avtar/7.jpg',
      shape: 'rounded-circle',
    },
    {
      imgSize: '60',
      img: 'assets/images/avtar/7.jpg',
      shape: 'b-r-25',
    },
    {
      imgSize: '50',
      img: 'assets/images/avtar/7.jpg',
      shape: 'b-r-15',
    },
  ];

  images2 = [
    {
      imgSize: '70',
      images: [
        {
          img: 'assets/images/avtar/3.jpg',
        },
        {
          img: 'assets/images/avtar/4.jpg',
        },
        {
          img: 'assets/images/avtar/11.jpg',
        },
      ],
    },
    {
      imgSize: '60',
      images: [
        {
          img: 'assets/images/avtar/3.jpg',
        },
        {
          img: 'assets/images/avtar/4.jpg',
        },
        {
          img: 'assets/images/avtar/11.jpg',
        },
      ],
    },
    {
      imgSize: '50',
      images: [
        {
          img: 'assets/images/avtar/3.jpg',
        },
        {
          img: 'assets/images/avtar/4.jpg',
        },
        {
          img: 'assets/images/avtar/11.jpg',
        },
      ],
    },
  ];

  initials = [
    {
      imgSize: '100',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '90',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '80',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '70',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '60',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '50',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '40',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '30',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '20',
      img: 'assets/images/avtar/3.jpg',
    },
    {
      imgSize: '10',
      img: 'assets/images/avtar/3.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
