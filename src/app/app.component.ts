import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar>
      Factory Robots List
      <button mat-icon-button routerLink="/add">
        <mat-icon>add_circle</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'angular-signals-database';
}
