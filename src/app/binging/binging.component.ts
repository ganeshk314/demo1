import { Component } from '@angular/core';

@Component({
  selector: 'app-binging',
  templateUrl: './binging.component.html',
  styleUrls: ['./binging.component.css']
})
export class BingingComponent {
  name="ganesh";
  fun(){
    window.alert("hello "+this.name);
  }
  weblink="./www.google.com";
  classname="text-primary";
}
