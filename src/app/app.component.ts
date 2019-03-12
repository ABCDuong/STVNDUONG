import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  currRoute: any;

  constructor (private router: Router) {}

  ngOnInit() {
    this.router.navigate(['home']);
  }

  getRoute() {
    this.currRoute = this.router.url;
  }


  getResume() {
    let newWindow = window.open('https://drive.google.com/file/d/1I7Bom1cXeJMYP1XTgjh3lcm1fTgLbHxn/view?usp=sharing', '_blank');
    newWindow = null;
  }
}
