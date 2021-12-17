import { Component, Output, EventEmitter } from '@angular/core';
import { OnomatopiaItemComponent } from '../onomatopia-item/onomatopia-item.component';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss'],
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = '';

  @Output()
  public sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia(value: string): void {
    this.sendOnomatopiaToParent.emit(value);
  }
}
