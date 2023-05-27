import { RobotsService } from './../services/robots.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-robot',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
  ],
  template: `
    <div class="container">
      <h2>Add Robot</h2>
      <div class="fields">
        <mat-form-field>
          <input [(ngModel)]="name" matInput placeholder="name" />
        </mat-form-field>
        <mat-form-field>
          <input [(ngModel)]="area" matInput placeholder="area" />
        </mat-form-field>
        <mat-form-field>
          <input [(ngModel)]="code" matInput placeholder="code" />
        </mat-form-field>
      </div>
      <div class="actions">
        <button mat-raised-button color="primary" (click)="save()">Save</button>
        <button mat-raised-button routerLink="/">Back</button>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 24px;
      }

      .form {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .actions {
        display: flex;
        gap: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRobotComponent {
  name = '';
  area = '';
  code = '';

  robotsService = inject(RobotsService);

  save() {
    const payload = { name: this.name, area: this.area, code: this.code };
    this.robotsService.addRobot(payload);
  }
}
