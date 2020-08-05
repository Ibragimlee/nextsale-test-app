import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  constructor() {}

  @Input('items') items: [];
  @Input('placeholder') placeholder: string;
  @Input('select_name') select_name: string;
  @Input('heading') heading: string;
  @Output() optionSelected = new EventEmitter<any>();

  ngOnInit(): void {}

  public select_state = {
    open_status: false,
    selected_value: '',
    select_name: '',
  };

  toggleCustomSelect(event) {
    this.select_state.open_status = !this.select_state.open_status;
  }

  hideCustomSelect(event) {
    this.select_state.open_status = false;
  }

  clickCustomOption(event) {
    this.select_state.open_status = false;
    this.select_state.selected_value = event.currentTarget.dataset.value;
    this.select_state.select_name = event.currentTarget.dataset.selectName;
    this.optionSelected.emit({
      select_name: this.select_state.select_name,
      selected_value: this.select_state.selected_value,
    });
  }
}
