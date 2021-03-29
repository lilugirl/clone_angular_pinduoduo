import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface TopMenu{
  title:string;
   url?:string;
 }
 

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex=-1;
  title = 'pinduoduo';
  @Input() tabs:TopMenu[]=[];
  @Output() tabSelected =new EventEmitter();

 
 handleSelection(index:number){
   this.selectedIndex=index;
   this.tabSelected.emit(this.tabs[this.selectedIndex]);

 }

  ngOnInit(): void {
  }

}
