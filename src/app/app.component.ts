import { Component } from '@angular/core';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { OnomatopiaItemComponent } from './onomatopia-item/onomatopia-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-form';

  public onomatopeias: Array<string> = [];

  addOnomatopia(newOnompatopia: string) {
    this.onomatopeias.push(newOnompatopia);
  }

  removeOnomatopia(index: number) {
    this.onomatopeias.length -= 1;
    console.log('remove list ' + index);
    this.onomatopeias.splice(index, 1);
  }
}
