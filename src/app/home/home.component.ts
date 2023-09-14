import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Name: any="";
eventLog: any="";
RollNo:any="";
EmailId:any="";

onkeyup (evt :any){
this.Name = evt.target.value;
this.eventLog = "name KEYUP event fired. New Name is '"+ this.Name + "'";

}

onevent (evt:any){
this.EmailId = evt.target.value;
this.eventLog = "email CHANGE event fired. New Email is '" + this.EmailId + "'";

}

validateData(){
if (this.RollNo !=""){
  this.eventLog="RollNo.:"+ this.RollNo;
}
else{
  this.eventLog="Enter Roll No.";
}
}
}
