import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-currentaffairs',
  templateUrl: './currentaffairs.component.html',
  styleUrls: ['./currentaffairs.component.css']
})
export class CurrentaffairsComponent implements OnInit {
  curl:string;
     politics=false;
     economy=false;
     others=false;
  ngOnInit() {
    this.curl = window.location.href; 
    if(this.curl.includes('politics'))
    this.politics=true;
    else if(this.curl.includes('economy'))
    this.economy=true;
    else
    this.others=true
  }



  
  
 
  
  


}
