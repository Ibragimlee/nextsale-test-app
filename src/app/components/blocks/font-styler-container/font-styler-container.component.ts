import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-styler-container',
  templateUrl: './font-styler-container.component.html',
  styleUrls: ['./font-styler-container.component.scss'],
})
export class FontStylerContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public received_styles = {
    fontName: 'f-reg',
    fontSize: '24px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#061f4c',
    textAlign: 'left',
  };

  onSelectedStyles(value: any) {
    if (value.fontName) {
      this.received_styles.fontName = value.fontName;
    }
    if (value.fontSize != '') {
      this.received_styles.fontSize = `${value.fontSize}px`;
    }
    if (value.bold == true) {
      this.received_styles.fontWeight = 'bold';
    } else {
      this.received_styles.fontWeight = 'normal';
    }
    if (value.italic == true) {
      this.received_styles.fontStyle = 'italic';
    } else {
      this.received_styles.fontStyle = 'normal';
    }
    if (value.textAlign == true) {
      this.received_styles.textAlign = 'center';
    } else {
      this.received_styles.textAlign = 'left';
    }
    if (value.color) {
      this.received_styles.color = value.color;
    } else {
      this.received_styles.color = '#000000';
    }

    console.log(this.received_styles);
  }
}
