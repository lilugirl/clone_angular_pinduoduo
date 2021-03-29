import { Component } from '@angular/core';
import {TopMenu} from './components'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
 ]

 handleTabSelected(topMenu:TopMenu){
   console.log('handleTabSelected',topMenu);
 }
}
