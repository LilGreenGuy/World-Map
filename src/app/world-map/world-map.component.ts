import { Component, OnInit } from '@angular/core';
import { WorldBankSearchService } from '../world-bank-search.service';
import { CountryNameHoverComponent } from '../country-name-hover/country-name-hover.component';
import { CountryDisplayComponent } from '../country-display/country-display.component';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CountryNameHoverComponent, CountryDisplayComponent],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css',
})

export class WorldMapComponent implements OnInit {
  worldBankData: any;
  countryNameValue: string = '';
  mouseX: number = 0;
  mouseY: number = 0;

  constructor(private worldBankSearch: WorldBankSearchService) {}

  hoverCountry(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    this.mouseX = event.clientX + 10;
    this.mouseY = event.clientY + 10;
    if (target.tagName === 'path' && event.type !== 'mouseleave') {
      const name = target.getAttribute('name') || '';
      this.countryNameValue = name;
    } else {
      this.countryNameValue = '';
    }
  }

  selectCountry(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    if (target.tagName === 'path') {
      const svg = target.ownerSVGElement;
      if (svg) {
        svg.querySelectorAll('path.selected').forEach((path) => {
          path.classList.remove('selected');
        });
      }
      target.classList.add('selected');
      const code = target.getAttribute('id');
      if (code) {
        this.worldBankSearch.search(code).subscribe((data) => {
          this.worldBankData = data;
        });
      }
    }
  }
  
  ngOnInit(): void {
  }
}
