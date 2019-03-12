import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: any;

  constructor(private router: Router) {
    this.works  = {
      'snapIoT': [
        {
          'title1': 'snap',
          'title2': 'Clinical',
          'role': 'Lead Front-End Software Engineer',
          'preview': 'assets/images/snapClinicalPatientPage.png',
          'color': '#8F57EB',
          'route': () =>  this.works.snapIoT[0].title1 + this.works.snapIoT[0].title2
        },
        {
          'title1': 'Stem',
          'title2': 'Immune',
          'role': 'UX Designer',
          'preview': 'assets/images/ELN/project_main.png',
          'color': '#2D9CDB',
          'route': () =>  this.works.snapIoT[1].title1 + this.works.snapIoT[1].title2
        }
      ],
      'self': [
        {
          'title1': 'REG',
          'title2': 'EX',
          'description': 'REGEX and references and tester',
          'preview': '',
          'color': '#F1C7C7',
          'route': ''
        },
        {
          'title1': 'Cafe ',
          'title2': 'Bassam',
          'description': 'Local San Diego Coffee House',
          'preview': 'assets/images/bassam.jpg',
          'color': '#F29856',
          'route': 'https://abcduong.github.io/CafeBassam/'
        }
      ]
    };
  }

   ngOnInit() {

   }

  getRoute(route: string) {
    if (!route) {
      console.log('route does not exist');
      return;
    }
    if (route.startsWith('http')) {
      let newWindow = window.open(route);
      newWindow = null;
    } else {
      this.router.navigate([route]);
    }
  }

}
