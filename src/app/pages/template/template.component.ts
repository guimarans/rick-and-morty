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

  ngOnInit() {
    this.onCharacter();
  }

  public onCharacter() {
    this.service.getCharacters().subscribe({
      next: (res) => console.log('RESPOSTA DA API: ', res),
      error: (err) => console.error('ERRO: ', err),
    });
  }
}
