import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'vz-seccion-amarilla',
  templateUrl: './seccion-amarilla.component.html',
  styleUrls: ['./seccion-amarilla.component.scss']
})
export class SeccionAmarillaComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("Sección Amarilla - Víctor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'Design of Portal, Blog, WebApp, App for iOS, Android, Smart TV and Windows 8 for the Search Engine and ads in Yellow Section directories.'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'Secci&oacute;n Amarilla, Proyecto, Portafolio, Dise&ntilde;o, Dise&ntilde;ador, Web, C# 5.0, XAML 1.0, Java 1.7, Objective-C 5.0, PHP, .NET 4.0, Est&aacute;ndares Web, Accesibilidad, Usabilidad, UX, Responsive Web Design, Microformatos, Optimizaci&oacute;n Web, SEO, Photoshop CS6, Fireworks CS6, Illustrator CS6, Dreamweaver CS6, Visual Studio 2013, XCode 5, Eclipse Juno, Cocoa 10.4.'
    });
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('seccion-amarilla');
  }

}
