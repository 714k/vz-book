import { Component, Input } from '@angular/core';


@Component({
  selector: 'vz-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent {
  @Input() galleries: any;
  @Input() galleryTypes: any;
}
