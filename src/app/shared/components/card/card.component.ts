import {
  CardCharacter,
  CardEpisodes,
  CardLocation,
} from './../../interface/card.interface';
import { Component, Input } from '@angular/core';

export type CardType = 'character' | 'location' | 'episode';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data!: CardCharacter | CardEpisodes | CardLocation;
  @Input() type!: CardType;

  get character(): CardCharacter | null {
    return this.type === 'character' ? (this.data as CardCharacter) : null;
  }

  get episode(): CardEpisodes | null {
    return this.type === 'episode' ? (this.data as CardEpisodes) : null;
  }

  get location(): CardLocation | null {
    return this.type === 'location' ? (this.data as CardLocation) : null;
  }
}
