import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-onomatopia-item',
  templateUrl: './onomatopia-item.component.html',
  styleUrls: ['./onomatopia-item.component.scss'],
})
export class OnomatopiaItemComponent {
  @Input() name: string | undefined;
  @Output() removeClick = new EventEmitter();

  remove() {
    console.log('remove item');
    this.removeClick.emit();
  }
}
