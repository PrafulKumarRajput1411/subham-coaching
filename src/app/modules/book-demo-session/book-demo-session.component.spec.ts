import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDemoSessionComponent } from './book-demo-session.component';

describe('BookDemoSessionComponent', () => {
  let component: BookDemoSessionComponent;
  let fixture: ComponentFixture<BookDemoSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDemoSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDemoSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
