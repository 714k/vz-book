import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nobody-knows',
  templateUrl: './nobody-knows.component.html',
  styleUrls: ['./nobody-knows.component.scss']
})
export class NobodyKnowsComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("Nobody knows... - Victor Zamudio"); 
    
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
    document.querySelector('body')?.classList.add('nobody-knows');
  }
}
