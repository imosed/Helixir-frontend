import {Component} from '@angular/core';
import {SelectionModel} from '../lib/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helixir';

  suggestions = new SelectionModel();
}

