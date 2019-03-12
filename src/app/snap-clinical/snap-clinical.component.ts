import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-snap-clinical',
  templateUrl: './snap-clinical.component.html',
  styleUrls: ['./snap-clinical.component.scss']
})
export class SnapClinicalComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#EFEFEB';
  }

}
