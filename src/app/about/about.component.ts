import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  boolvlaue:boolean=false;
  num:number=2;
  contacts:any = [
    {name:'ganesh',rollno:'140'},
    {name:'ganesh',rollno:'140'},
    {name:'ganesh',rollno:'140'},
  ]
  names:any;

}
