import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {

  constructor() { }
  @Input() category :any 
  ngOnInit(): void {
  }

}
