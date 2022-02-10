import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  headerText: string =''
  tabs : any =[{
    id :1,
    name:'Wake',
    active :false
  },
  {
    id :2,
    name:'Focus',
    active :false
  },
  {
    id :3,
    name:'Sleep',
    active :false
  },
  
]
  ngOnInit(): void {
  }

  handleTabClick($event : any,index :number){
    console.log($event)
    for(let tab of this.tabs){
      tab.active = false
    }
    this.tabs[index].active =true;
    this.headerText = $event.name
    
  }

}
