import { Component } from '@angular/core';

@Component({
  selector: 'vz-book-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'victorZamudio';
  isSearchActive = false;

  handleSearch() {
    this.isSearchActive = true
    console.log(this.isSearchActive)
  }
}
