import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: any = {
    'snapIoT': [
      {
        'title': 'snapClinical',
        'role': 'Lead Front-End Software Engineer',
        'preview': 'assets/images/snapClinicalPatientPage.png'
      },
      {
        'title': 'StemImmune',
        'role': 'UX Designer',
        'preview': 'assets/images/ELN/project_main.png'
      }
    ],
    'self': [
      {
        'title': 'REGEX',
        'description': 'REGEX and references and tester',
        'preview': ''
      },
      {
        'title': 'Cafe Bassam',
        'description': 'Local San Diego Coffee House',
        'preview': ''
      }
    ]
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getRoute(route: string) {
    this.router.navigate([route]);
  }

}
