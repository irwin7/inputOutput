import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  post = [
    {
      title: 'wowo',
      text: 'lorem ipsum doler....'
    },
    {
      title: 'yahoo',
      text: 'lorem ipsum doler....'
    }
  ]

}
