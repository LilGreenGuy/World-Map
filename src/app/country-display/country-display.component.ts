import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-country-display',
  standalone: true,
  imports: [NgIf],
  templateUrl: './country-display.component.html',
  styleUrl: './country-display.component.css',
})

export class CountryDisplayComponent implements OnInit {
  @Input() worldBankData: any;
  ngOnInit(): void {}
}
