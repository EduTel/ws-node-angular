import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title app.component';
  public number1: number;
  public number2: number;
}
