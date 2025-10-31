import { Component } from '@angular/core';
import { HelloSection } from './hello-section/hello-section';

@Component({
  selector: 'main-page',
  imports: [HelloSection],
  templateUrl: './main-page.html',
})
export class MainPage {}
