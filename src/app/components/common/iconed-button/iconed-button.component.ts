import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iconed-button',
  templateUrl: './iconed-button.component.html',
  styleUrls: ['./iconed-button.component.scss'],
})
export class IconedButtonComponent implements OnInit {
  constructor() {}

  @Input('icon') icon: string;
  @Input('function') function: string;
  @Output() buttonClicked = new EventEmitter<any>();

  public btn_state = {
    function: '',
    value: false,
  };

  ngOnInit(): void {}

  clickIconedBtn(event) {
    this.btn_state.function = event.currentTarget.dataset.function;
    this.btn_state.value = !this.btn_state.value;
    this.buttonClicked.emit({
      function_name: this.btn_state.function,
      value: this.btn_state.value,
    });
  }
}
