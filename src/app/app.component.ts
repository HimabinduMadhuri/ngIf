import { Component } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  marks:number = 34;
  b:boolean;

  constructor(){
     if(this.marks >=35){
       this.b= true;

     }
     else{
       this.b = false;

     }
  }
}
