import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-country-name-hover',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './country-name-hover.component.html',
  styleUrl: './country-name-hover.component.css',
})
  
export class CountryNameHoverComponent implements OnInit {
  @Input() countryName: string = '';
  @Input() x: number = 0;
  @Input() y: number = 0;
  
  ngOnInit(): void {}
}
