import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Data } from '@angular/router';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data:any =data;
  title = 'Assignment';
  totalFollowers = "23004";
  

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit() {
    
  }
   //const toggleSwitch = this.document.querySelector('#toggle-button');

  switchTheme(e:any) {
    console.log(e.classList)
    //console.log(e.classList)
    

    if(e.classList.contains('active'))
    {
     
     
      this.document.documentElement.setAttribute('data-theme', 'dark');
      console.log(this.document.documentElement.getAttribute('data-theme'))
    }
      else {
        
        document.documentElement.setAttribute('data-theme', 'light');
      }    
  }
  
 // toggleSwitch.addEventListener('change', switchTheme, false);

}

export type Mode = 'light-mode' | 'dark-mode';
