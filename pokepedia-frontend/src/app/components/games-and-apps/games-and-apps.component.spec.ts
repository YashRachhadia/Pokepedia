import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAndAppsComponent } from './games-and-apps.component';

describe('GamesAndAppsComponent', () => {
  let component: GamesAndAppsComponent;
  let fixture: ComponentFixture<GamesAndAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAndAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAndAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
