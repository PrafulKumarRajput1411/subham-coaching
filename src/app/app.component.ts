import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { ChangeTitleService } from './services/titleService/change-title.service';

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
    private changeTitleService: ChangeTitleService,
    private activatedRoutes: ActivatedRoute
  ) {
    this.titleService.setTitle("Radiant Tutorials | Home")
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.changeTitleService.setDynamicTitle(event.urlAfterRedirects);
      window.scrollTo(0, 0);
    });


  }
}
