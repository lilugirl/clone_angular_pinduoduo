import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit,  Renderer2, ViewChild } from '@angular/core';

export interface ImageSilder{
  imgUrl:string;
  link:string;
  caption:string;
}

@Component({
  selector: 'app-image-silder',
  templateUrl: './image-silder.component.html',
  styleUrls: ['./image-silder.component.scss']
})
export class ImageSilderComponent implements OnInit,AfterViewInit,OnDestroy {
  @ViewChild('imageSlider') imageSlider:ElementRef;
  @Input() silders: ImageSilder[]=[];
  @Input() scrollHeight='160px';
  @Input() intervalBySeconds=2;
  selectedIndex=0;
  intervalId:any;
  constructor(private rd2:Renderer2) { }

  ngOnInit() {
  
  }

  ngAfterViewInit():void{
   
    this.intervalId= setInterval(()=>{
       this.rd2.setProperty(this.imageSlider.nativeElement,'scrollLeft',(this.getIndex(++this.selectedIndex)*this.imageSlider.nativeElement.scrollWidth)/this.silders.length)
     },this.intervalBySeconds * 1000)
  }

  ngOnDestroy():void{
    clearInterval(this.intervalId);
  }

  handleScroll(ev:any){
    const ratio=ev.target.scrollLeft * this.silders.length/ev.target.scrollWidth;
    this.selectedIndex=Math.round(ratio);
  }

  getIndex(idx:number):number{
    return idx >=0 ?idx % this.silders.length:this.silders.length-(Math.abs(idx) % this.silders.length);
  }

  

}
