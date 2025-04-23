import { Component } from '@angular/core';
import { CardCharacter } from '../../shared/interface/card.interface';
import { RickAndMortyService } from '../../service/service.service';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  characterList: CardCharacter[] = [];

  constructor(private readonly service: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacter();
  }

  private loadCharacter(): void {
    this.service.getCharacters().subscribe({
      next: (res) => {
        this.characterList = res.results;

        console.log('character', this.characterList);
      },
      error: (err) => console.error('ERRO CHARACTER: ', err),
    });
  }
}
