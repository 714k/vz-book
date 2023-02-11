import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nobody-knows-he-worked-on',
  templateUrl: './nobody-knows-he-worked-on.component.html',
  styleUrls: ['./nobody-knows-he-worked-on.component.scss']
})
export class NobodyKnowsHeWorkedOnComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("nobody knows he worked on... - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The portfolio of mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'book, projects, portfoilio, mexican, web, ui, developer'
    });
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('nobody-knows-he-worked-on');
  }
}
