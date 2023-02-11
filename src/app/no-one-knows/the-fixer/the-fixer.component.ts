import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-the-fixer',
  templateUrl: './the-fixer.component.html',
  styleUrls: ['./the-fixer.component.scss']
})
export class TheFixerComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("The Fixer - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The skills of mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'debugger, skills, mexican, web, ui, developer'
    });
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('the-fixer');
  }
}
