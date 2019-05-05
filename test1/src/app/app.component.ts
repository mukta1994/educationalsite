import { Component,OnInit, asNativeElements } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  isHovering = false;
  mouseHovering(){
    this.isHovering = true;
  }

  mouseLeft() {
    this.isHovering = false;
}
  
 
  
}
