import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sup!';
  message='Please dont do it';
  private count=0;
  public likes=5;
  initial_likes=this.likes;
  constructor() {

  }
  ngOnInit(): any {
    $(document).ready(function(){
      console.log('ready');

    })
  };
  mymethod(){
    console.log(this.count);
    this.count+=1;
    if(this.count==1){
      this.message='Oh fuck off';
    }else{
      this.message='Keep clicking, button is disabled.';
    }
  };
  mycounter(){
    console.log('Likes are:'+this.likes+this.initial_likes);
    if(this.likes==this.initial_likes){
      this.likes+=1;
    }else{
      return false;
    }
  };
}
