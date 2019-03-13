import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  copied1 = false;
  copied2 = false;
  linkedIn = 'https://www.linkedin.com/in/stvnduong/';
  email = 'stevenduong22@gmail.com';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async copyClipboard(data: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = data;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    if (data.startsWith('https')) {
      this.copied1 = true;
      const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
      await wait(3000);
      this.copied1 = false;
    } else {
      this.copied2 = true;
      const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
      await wait(3000);
      this.copied2 = false;
    }
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
      this.copyClipboard(route);
    }
  }

}
