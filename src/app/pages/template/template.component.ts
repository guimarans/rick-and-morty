import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-template',
  standalone: false,
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.onInfo();
    this.onLocation();
    this.onEpisodes();
  }

  public onInfo() {
    this.service.getCharacters().subscribe({
      next: (res) => console.log('Resposta das infos: ', res.info),
      error: (err) => console.error('ERRO: ', err),
    });
  }

  public onLocation() {
    this.service.getLocation().subscribe({
      next: (res) => console.log('Resposta da localização: ', res),
      error: (err) => console.error('Erro: ', err),
    });
  }

  public onEpisodes() {
    this.service.getEpisodes().subscribe({
      next: (res) => console.log('Resposta da episodios: ', res),
      error: (err) => console.error('Erro: ', err),
    });
  }
}
