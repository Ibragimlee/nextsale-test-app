import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDragDrop]',
})
export class DragDropDirective {
  @HostBinding('style.background-color') private background = 'transparent';
  @HostBinding('style.border') private border = '1px solid #e1e4e8';

  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#EFF6FF';
    this.border = '1px solid #b0b7c3';
  }
  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent';
    this.border = '1px solid #e1e4e8';
  }

  @HostListener('mouseover', ['$event']) public onMouseOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent';
    this.border = '1px solid #b0b7c3';
  }

  @HostListener('mouseout', ['$event']) public onMouseOut(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent';
    this.border = '1px solid #e1e4e8';
  }

  @HostListener('drop', ['$event']) public ondrop(evt) {
    this.background = 'transparent';
    this.border = '1px solid #e1e4e8';
  }
}
