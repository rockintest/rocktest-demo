import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showHeroes = true;
  showConfig = false;
  showDownloader = false;
  showUploader = false;
  showSearch = false;

  toggleHeroes() { this.showHeroes = !this.showHeroes; }
  toggleConfig() { this.showConfig = !this.showConfig; }
  toggleDownloader() { this.showDownloader = !this.showDownloader; }
  toggleUploader() { this.showUploader = !this.showUploader; }
  toggleSearch() { this.showSearch = !this.showSearch; }
 }
