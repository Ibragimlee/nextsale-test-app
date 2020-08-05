import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-checkbox',
  templateUrl: './color-checkbox.component.html',
  styleUrls: ['./color-checkbox.component.scss'],
})
export class ColorCheckboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('hex') hex: string;
  @Input('rgba') rgba: string;
  @Input('checked') checked: boolean;
  @Input('id') id: number;
  @Output() colorChecked = new EventEmitter<any>();

  public btn_state = {
    function: 'color',
    hex: '',
    rgba: '',
    checked: false,
    id: '',
  };

  onColorChange(event) {
    if (event.currentTarget.checked == true) {
      this.btn_state.checked = true;
      this.btn_state.hex = event.currentTarget.value;
      this.btn_state.rgba = event.currentTarget.dataset.rgba;
      this.btn_state.id = event.currentTarget.dataset.id;
      this.colorChecked.emit({
        function: this.btn_state.function,
        hex: this.btn_state.hex,
        rgba: this.btn_state.rgba,
        checked: this.btn_state.checked,
        id: this.btn_state.id,
      });
    }
  }
}
