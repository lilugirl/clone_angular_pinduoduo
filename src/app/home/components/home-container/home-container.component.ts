import { Component, OnInit } from '@angular/core';
import {TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  ngOnInit():void{

  }
  topMenus:TopMenu[]=[
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
  
   scrollableTabBgColor='red';
  
  
   handleTabSelected(topMenu:TopMenu){
    const colors=['red','blue','black'];
    const idx=Math.floor(Math.random()*3);
    this.scrollableTabBgColor=colors[idx];
    console.log('handleTabSelected',topMenu);
  }

}
