import { Injectable, computed, inject, signal } from '@angular/core';
import { Robot } from '../models/robot.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RobotsService {
  robots = signal<Robot[]>([
    {
      name: 'robot1',
      area: 'Dispatch1',
      code: 'AWRETP',
    },
    {
      name: 'robot2',
      area: 'Construction1',
      code: 'AWEFEW',
    },
    {
      name: 'robot3',
      area: 'Carpark1',
      code: 'AWRGPL',
    },
    {
      name: 'robot4',
      area: 'Amenities1',
      code: 'AWRDDF',
    },
    {
      name: 'robot5',
      area: 'Automation3',
      code: 'ZEFRTK',
    },
    {
      name: 'robot6',
      area: 'Garage1',
      code: 'CCVPTH',
    },
    {
      name: 'robot7',
      area: 'Engineering',
      code: 'AWRGGP',
    },
  ]);

  totalRobots = computed(() => this.robots().length);
  maxRobots = 8;
  maxRobotQuotaMet = computed(() => this.totalRobots() >= this.maxRobots);

  router = inject(Router);

  addRobot(newRobot: Robot): void {
    setTimeout(() => {
      this.robots.update((robots) => [newRobot, ...robots]);
      this.router.navigate(['/']);
    }, 500);
  }

  deleteRobot(code: string): void {
    setTimeout(() => {
      this.robots.update((robots) => robots.filter((rob) => rob.code !== code));
    }, 500);
  }
}
