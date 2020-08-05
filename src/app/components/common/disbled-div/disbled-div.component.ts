import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disbled-div',
  templateUrl: './disbled-div.component.html',
  styleUrls: ['./disbled-div.component.scss'],
})
export class DisbledDivComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('title') title: string;
  @Input('value') value: string;
}
