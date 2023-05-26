import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RobotsService } from '../services/robots.service';

@Component({
  selector: 'app-robots-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  template: `
    <mat-list>
      <mat-list-item *ngFor="let robot of robots()">
        <h3 matListItemTitle>
          {{ robot.name }}
        </h3>
        <p matListItemLine>
          {{ robot.area }}
        </p>
      </mat-list-item>
    </mat-list>
  `
})
export class RobotsListComponent {
  robots = inject(RobotsService).robots;
}
