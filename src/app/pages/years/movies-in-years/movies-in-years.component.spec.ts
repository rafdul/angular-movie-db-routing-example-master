import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInYearsComponent } from './movies-in-years.component';

describe('MoviesInYearsComponent', () => {
  let component: MoviesInYearsComponent;
  let fixture: ComponentFixture<MoviesInYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesInYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
