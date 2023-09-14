import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent {
   name:string = "manasa";
   details:any = [
    {name:"gaensh",age:20},
    {name:"ramnsh",age:50}
   ]
}
