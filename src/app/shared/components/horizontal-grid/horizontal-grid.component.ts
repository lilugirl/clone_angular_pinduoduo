import { Component,  Input,  OnInit } from '@angular/core';

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
 @Input() cols=8;  // 总列数
 @Input() displayCols=5; // 一屏之内显示的列数
 sliderMargin='0';

  constructor() { }

  ngOnInit() {
  }

  public get scrollable():boolean{
    return this.cols>this.displayCols;
  }

  public get templateRows():string{
    return `minmax(auto,max-content)`;
  }

  public get templateColumns():string{
  
    return `repeat(${this.cols},calc((100vw - ${this.displayCols*0.4}rem)/${this.displayCols}))`
  }
  
  handleScroll(ev:any){
     console.log('ev',ev);
     this.sliderMargin=`0 ${100 * ev.target.scrollLeft/ev.target.scrollWidth}%`
  }


  
}
