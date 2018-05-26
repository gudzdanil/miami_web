import { Component, OnInit } from '@angular/core';

interface Goal {
  id: string;
  title: string;
  done: boolean;
  description: string;
}

@Component({
  selector: 'mi-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  goals: Goal[] = [
    {
      id: '1',
      title: 'Demo 1',
      done: true,
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: '2',
      title: 'Demo 2',
      done: false,
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet`
    },
    {
      id: '3',
      title: 'Demo 3',
      done: true,
      // tslint:disable-next-line
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ];

  constructor() {}

  trackBy(index: number, goal: Goal) {
    return goal.id;
  }
}
