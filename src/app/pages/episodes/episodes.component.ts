import { Component } from '@angular/core';
import { CardEpisodes } from '../../shared/interface/card.interface';
import { RickAndMortyService } from '../../service/service.service';

@Component({
  selector: 'app-episodes',
  standalone: false,
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent {
  episodeList: CardEpisodes[] = [];

  constructor(private readonly service: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  private loadEpisodes(): void {
    this.service.getEpisodes().subscribe({
      next: (res) => {
        this.episodeList = res.results;

        console.log('episodes', this.episodeList);
      },
      error: (err) => console.error('ERRO EPISODES: ', err),
    });
  }
}
