import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-font-styler',
  templateUrl: './font-styler.component.html',
  styleUrls: ['./font-styler.component.scss'],
})
export class FontStylerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() selectedStyles = new EventEmitter<any>();

  public toggler = false;

  public font_items = [
    { name: 'Inter', value: 'Inter' },
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Open Sans', value: 'Open Sans' },
    { name: 'Lato', value: 'Lato' },
    { name: 'Oswald', value: 'Oswald' },
  ];

  public font_sizes = [
    { name: '32', value: '32' },
    { name: '24', value: '24' },
    { name: '20', value: '20' },
    { name: '16', value: '16' },
    { name: '14', value: '14' },
    { name: '12', value: '12' },
  ];

  public iconed_buttons = [
    { icon: '../../../../assets/icons/bold_icon.svg', function: 'bold' },
    { icon: '../../../../assets/icons/italics_icon.svg', function: 'italic' },
    {
      icon: '../../../../assets/icons/text_align_icon.svg',
      function: 'textAlign',
    },
  ];

  public colored_checkboxes = [
    { id: 0, hex: '', rgba: '', checked: false },
    { id: 1, hex: '#00D58C', rgba: '0,213,140,100', checked: false },
    { id: 2, hex: '#00BFD8', rgba: '0,191,216,100', checked: false },
    { id: 3, hex: '#79C62D', rgba: '121,198,45,100', checked: false },
    { id: 4, hex: '#0096FB', rgba: '0,150,251,100', checked: false },
    { id: 5, hex: '#6F31BE', rgba: '111,49,190,100', checked: false },
    { id: 6, hex: '#FE0061', rgba: '254,0,97,100', checked: false },
    { id: 7, hex: '#FF4500', rgba: '255,69,0,100', checked: false },
    { id: 8, hex: '#FFBF00', rgba: '255,191,0,100', checked: false },
    { id: 9, hex: '#061E4C', rgba: '6,30,76,100', checked: false },
    { id: 10, hex: '#E2E4E8', rgba: '226,228,232,100', checked: false },
  ];

  public disabled_divs = [
    { title: 'HEX', value: '' },
    { title: 'R', value: '' },
    { title: 'G', value: '' },
    { title: 'B', value: '' },
    { title: 'Alpha', value: '' },
  ];

  public output_options = {};

  onOptionSelected(value: any) {
    this.output_options[value.select_name] = value.selected_value;
    this.selectedStyles.emit(this.output_options);
  }

  onIconedBtnClicked(value: any) {
    this.output_options[value.function_name] = value.value;
    this.selectedStyles.emit(this.output_options);
  }

  onColorChecked(value: any) {
    this.colored_checkboxes.forEach((item) => {
      item.checked = false;
    });
    this.colored_checkboxes[value.id].checked = true;
    this.output_options[value.function] = value.hex;
    this.output_options['rgba'] = value.rgba;
    this.selectedStyles.emit(this.output_options);

    // separate rgba to each value for disabled divs~~~~~~
    this.disabled_divs[0].value = this.output_options['color'];
    this.disabled_divs[1].value = this.output_options['rgba'].split(',')[0];
    this.disabled_divs[2].value = this.output_options['rgba'].split(',')[1];
    this.disabled_divs[3].value = this.output_options['rgba'].split(',')[2];
    this.disabled_divs[4].value = this.output_options['rgba'].split(',')[3];
    // separate rgba to each value for disabled divs~~~~~~
  }

  toggleFontStyler(event) {
    this.toggler = !this.toggler;
  }
}
