import { Component } from '@angular/core';
import { CardLocation } from '../../shared/interface/card.interface';
import { RickAndMortyService } from '../../service/service.service';

@Component({
  selector: 'app-locations',
  standalone: false,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  locationList: CardLocation[] = [];

  constructor(private readonly service: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  private loadLocations(): void {
    this.service.getLocation().subscribe({
      next: (res) => {
        this.locationList = res.results;

        console.log('episodes', this.locationList);
      },
      error: (err) => console.error('Erro location: ', err),
    });
  }
}
