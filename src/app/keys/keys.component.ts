import { Component } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent {
  eventlog:any=" ";
  names:any;
  keyupevent(evt:any){
    this.eventlog = "keyp up event is fired " + evt.target.value;
  }
  changeevent(evt:any){
    this.eventlog = "chaneg event is fired " + evt.target.value;
  }
  clickfun(){
    window.alert("hello click event is fired")
  }
}
