import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

export const IMAGESET = [

];

@Component({
  selector: 'app-snap-clinical',
  templateUrl: './snap-clinical.component.html',
  styleUrls: ['./snap-clinical.component.scss']
})
export class SnapClinicalComponent implements AfterViewInit {

  @ViewChild('carousel') carousel: any;
  movies: Object[] = [];
  slides: Array<Object> = [
    { 'src': '../../assets/images/snapClinicalHomePage.png' },
    { 'src': '../../assets/images/snapClinicalPatientPage.png' },
    { 'src': '../../assets/images/snapClinicalPatientDetailPage.png' }
  ];
  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 100,
    perspective: 1,
    startSlide: 0,
    border: 0,
    dir: 'ltr',
    width: 580,
    height: 350,
    space: 380,
    autoRotationSpeed: 5000,
    loop: true
  };

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#EFEFEB';
  }

  slideClicked(index) {
    this.carousel.slideClicked(index);
  }

}
