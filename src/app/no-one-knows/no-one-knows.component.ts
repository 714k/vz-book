import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-no-one-knows',
  templateUrl: './no-one-knows.component.html',
  styleUrls: ['./no-one-knows.component.scss']
})
export class NoOneKnowsComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("No one knows... - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'All info about the UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'info, web, ui, developer'
    });
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('no-one-knows');
  }
}
