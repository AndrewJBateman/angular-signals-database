import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RobotsService } from '../services/robots.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-robots-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  template: `
    <mat-list>
      <mat-list-item *ngFor="let robot of robots()">
        <h3 matListItemTitle>
          {{ robot.name }}
        </h3>
        <p matListItemLine>
          {{ robot.area }}
        </p>
        <button
          matListItemMeta
          mat-icon-button
          (click)="robotsService.deleteRobot(robot.code)"
        >
          <mat-icon color="warn">delete</mat-icon>
        </button>
      </mat-list-item>
    </mat-list>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RobotsListComponent {
  robotsService = inject(RobotsService);
  robots = this.robotsService.robots;
}
