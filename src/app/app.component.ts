import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
  loadedSection = 'basic';

  onNavigate(feature: string){
    this.loadedSection = feature;
  }
}
