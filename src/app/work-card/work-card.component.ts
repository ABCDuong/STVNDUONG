import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

  @Input() projectPreview: any;
  @Input() projectTitle1: string;
  @Input() projectTitle2: string;
  @Input() projectColor: string;
  @Input() projectRole: string;

  @Output() onView: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  viewProject() {
    this.onView.emit();
  }

}
