import { Component, signal } from '@angular/core';
import { iKnowledge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnmowledge = signal<iKnowledge[]>([
    {
      src: 'assets/icon/knowledge/html5.svg',
      alt: 'html5'
    },
    {
      src: 'assets/icon/knowledge/css3.svg',
      alt: 'css3'
    },
    {
      src: 'assets/icon/knowledge/javascript.svg',
      alt: 'javascript'
    },
    {
      src: 'assets/icon/knowledge/angular.svg',
      alt: 'angular'
    },
    {
      src: 'assets/icon/knowledge/nodejs.svg',
      alt: 'nodejs'
    },
  ])
}
