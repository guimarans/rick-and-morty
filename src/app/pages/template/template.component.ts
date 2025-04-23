import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-template',
  standalone: false,
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent implements OnInit {
  currentRoute: string = '';
  bannerImage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // já pega a rota no início
    this.currentRoute = this.router.url;
    this.setBannerImage();

    // e continua ouvindo as mudanças futuras de rota
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
      this.setBannerImage();
    });
  }

  private setBannerImage(): void {
    if (this.currentRoute === '/' || this.currentRoute === '') {
      this.bannerImage = '/assets/characters-banner.png'; // ou qualquer imagem da home
    } else if (this.currentRoute.includes('/characters')) {
      this.bannerImage = '/assets/characters-banner.png';
    } else if (this.currentRoute.includes('/episodes')) {
      this.bannerImage = '/assets/episodes-banner.png';
    } else if (this.currentRoute.includes('/locations')) {
      this.bannerImage = '/assets/locations-banner.png';
    } else {
      this.bannerImage = '/assets/characters-banner.png'; // fallback
    }
  }
}
