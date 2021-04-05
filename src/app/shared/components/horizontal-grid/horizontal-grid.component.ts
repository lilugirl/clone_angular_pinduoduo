import { Component,  OnInit } from '@angular/core';

export interface Channel{
  id:number;
  icon:string;
  title:string;
  link:string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {


  channels:Channel[]=[
    {
      id:1,
      title:'限时秒杀',
      icon:'https://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png',
      link:'hot'
    },
    {
      id:2,
      title:'断货清仓',
      icon:'https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png',
      link:''
    },
    {
      id:3,
      title:'多多果园',
      icon:'https://iconutopia.com/wp-content/uploads/2016/06/rocket-book.png',
      link:''
    },
    {
      id:4,
      title:'秒杀',
      icon:'https://iconutopia.com/wp-content/uploads/2016/06/planet1.png',
      link:''
    }
  ];

  constructor() { }
  
  

  ngOnInit() {
  }


  
}
