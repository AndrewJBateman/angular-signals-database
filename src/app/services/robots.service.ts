import { Injectable, signal } from '@angular/core';
import { Robot } from '../models/robot.model';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  robots = signal<Robot[]>([
    {
      name: 'robot1',
      area: 'Dispatch1',
      code: 'AWRETP'
    },    {
      name: 'robot2',
      area: 'Construction1',
      code: 'AWEFEW'
    },
    {
      name: 'robot3',
      area: 'Carpark1',
      code: 'AWRGPL'
    },
    {
      name: 'robot4',
      area: 'Amenities1',
      code: 'AWRDDF'
    },
    {
      name: 'robot5',
      area: 'Automation3',
      code: 'ZEFRTK'
    },
    {
      name: 'robot6',
      area: 'Garage1',
      code: 'CCVPTH'
    },
    {
      name: 'robot7',
      area: 'Engineering',
      code: 'AWRGGP'
    }
  ])
  constructor() { }
}
