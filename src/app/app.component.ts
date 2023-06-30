import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/General', icon: 'newspaper' },
    { title: 'Business', url: '/Business', icon: 'business' },
    { title: 'Sports', url: '/Sports', icon: 'basketball' },
    { title: 'Entertainment', url: '/Entertainment', icon: 'videocam' },
    { title: 'Technology', url: '/Technology', icon: 'laptop' },
    { title: 'Health', url: '/Health', icon: 'medkit' },
    { title: 'Science', url: '/Science', icon: 'rocket' }
  ];
 
  constructor() {}
}
