import { Component } from '@angular/core';
import { CardData } from '../../shared/interface/card.interface';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  characterList: CardData[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.onCharacter();
  }

  public onCharacter(): void {
    this.service.getCharacters().subscribe({
      next: (res) => {
        this.characterList = res.results;

        console.log('character', this.characterList);
      },
      error: (err) => console.error('ERRO: ', err),
    });
  }
}
