import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currRoute = 'home';

  constructor (
    private router: Router,
    private routeService: RouteService
  ) {}

  getRoute(route: string) {
    this.router.navigate([route]);
    this.currRoute = route;
    this.routeService.activeRoute = this.currRoute;
  }

  getResume() {
    let newWindow = window.open('https://drive.google.com/file/d/1I7Bom1cXeJMYP1XTgjh3lcm1fTgLbHxn/view?usp=sharing', '_blank');
    newWindow = null;
  }
}

