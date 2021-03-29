import { Component, OnInit } from '@angular/core';

interface TopMenu{
  title:string;
   url?:string;
 }
 
 
 
 interface Dict{
   [key:number]:string;
 }
 
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex=-1;
  title = 'pinduoduo';
  tabs:TopMenu[]=[
  {title:'男装',url:'#1'},
  {title:"儿童",url:'#2'},
  {title:'百货',url:''},
  {title:'手机',url:''},
  {title:'日用',url:''},
  {title:'美妆',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
  {title:'百货',url:''},
  {title:'手机',url:''},
  {title:'日用',url:''},
  {title:'美妆',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
  {title:'百货',url:''},
  {title:'手机',url:''},
  {title:'日用',url:''},
  {title:'美妆',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
];

  dict:Dict={
    1:'aaaa',
    2:'bbbb'

  }



 constructor(){
  console.log(this.dict[1]);
  console.log(this.dict[2]);
 }

 handleSelection(index:any){
   console.log(index);
   this.selectedIndex=index;
 }

  ngOnInit(): void {
  }

}
