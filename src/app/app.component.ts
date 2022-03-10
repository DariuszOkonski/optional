import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  randomText = lorem.sentence();


  onInput(event: any) {
    console.log(event.target.value)
  }
}
