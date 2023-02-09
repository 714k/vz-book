import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'vz-at-the-beginning',
  templateUrl: './at-the-beginning.component.html',
  styleUrls: ['./at-the-beginning.component.scss']
})
export class AtTheBeginningComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.title.setTitle("At the beginning... - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The beginning of my career'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'beginning, web, ui, developer'
    });

    // this.elementRef.nativeElement.ownerDocument
    //     .body.style.backgroundColor = '#9EC5FF';

    // For update the logo in each section
    // document.getElementsByTagName("h1")[0].style.color = 'green';
        
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('at-the-beginning');
  }

}
