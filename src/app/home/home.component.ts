import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private routeService: RouteService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FFF';
  }

  getRoute(route: string) {
    this.router.navigate([route]);
    this.routeService.currRoute = route;
  }

}
