import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems = [
    { label: 'Personagens', route: '/characters' },
    { label: 'Localizações', route: '/locations' },
    { label: 'Episódios', route: '/episodes' },
  ];
}
