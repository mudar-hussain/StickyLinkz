import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sticky Linkz';
  isWindow: boolean = window.innerWidth > 770;

  constructor() { }

  ngAfterViewInit() {
    // Use setTimeout to ensure the elements are fully rendered
    setTimeout(() => {
      this.updateHeaderHeight();
      window.addEventListener('resize', () => this.updateHeaderHeight());
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isWindow = event.target.innerWidth > 770 ? true : false;
    this.updateHeaderHeight();
    window.addEventListener('resize', () => this.updateHeaderHeight());
  }

  updateHeaderHeight(): void {
    let newHeight = '100px';
    if (this.isWindow) {
      newHeight = '133px';
    }
    document.documentElement.style.setProperty('--header-catNav-height', newHeight);
  }
}
