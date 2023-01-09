import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './responsive-scss/home-mobile.component.scss',
    './cinema.component.scss',
    './card.component.scss',
    './delivery.component.scss',
    './event.component.scss'
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
