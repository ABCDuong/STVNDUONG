import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private routeService: RouteService
  ) { }

  ngOnInit() {
  }

  getRoute(route: string) {
    this.router.navigate([route]);
    this.routeService.currRoute = route;
  }

}
