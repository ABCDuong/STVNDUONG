import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currRoute = 'home';

  constructor (
    private router: Router,
    public routeService: RouteService
  ) {}

  ngOnInit() {
    this.routeService.currRoute = this.currRoute;
  }

  getRoute(route: string) {
    this.router.navigate([route]);
    this.currRoute = route;
    this.routeService.currRoute = this.currRoute;
  }

  getResume() {
    let newWindow = window.open('https://drive.google.com/file/d/1CWiMDSLvwQjk4Ex0ytczjd-e9xPH6v7m/view?usp=sharing', '_blank');
    newWindow = null;
  }
}

