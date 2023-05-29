import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RobotsService } from './services/robots.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  template: `
    <mat-toolbar>
      Factory Robots: {{ totalRobots() }} / {{ maxRobots }}
      <button mat-icon-button routerLink="/add" [disabled]="robotQuotaMet()">
        <mat-icon color="secondary">add_circle</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'angular-signals-database';

  robotsService = inject(RobotsService);
  totalRobots = this.robotsService.totalRobots;
  maxRobots = this.robotsService.maxRobots;
  robotQuotaMet = this.robotsService.maxRobotQuotaMet;

  snackBar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      if (this.robotsService.maxRobotQuotaMet()) {
        this.snackBar.open('Max number of robots reached', 'Close');
      }
    });
  }
}
