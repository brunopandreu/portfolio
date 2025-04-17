import { Component, inject, signal } from '@angular/core';
import { iProjects } from '../../interface/projects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { eDialogPanelClass } from '../../enum/eDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<iProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: 'Descrição de teste',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
  ])

  public openDialog(data: iProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: eDialogPanelClass.PROJECTS,
    })
  }
}
