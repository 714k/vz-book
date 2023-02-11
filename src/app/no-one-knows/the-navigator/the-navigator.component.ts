import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-the-navigator',
  templateUrl: './the-navigator.component.html',
  styleUrls: ['./the-navigator.component.scss']
})
export class TheNavigatorComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("The Navigator - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The professional experience of mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'professional, laboral, experience, adventures, work, mexican, web, ui, developer'
    });
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('the-navigator');
  }
}
