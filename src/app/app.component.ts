import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coaching';
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoutes: ActivatedRoute
  ) {
    this.titleService.setTitle("Radiant Tutorials | Home")
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // Scroll to the top when the URL changes
      window.scrollTo(0, 0);
    });


  }
}
