import { AddRobotComponent } from './components/add-robot.component';
import { Routes } from '@angular/router';
import { RobotsListComponent } from './components/robots-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RobotsListComponent,
  },
  {
    path: 'add',
    component: AddRobotComponent,
  },
];
