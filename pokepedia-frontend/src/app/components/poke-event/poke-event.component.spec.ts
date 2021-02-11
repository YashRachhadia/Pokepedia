import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEventComponent } from './poke-event.component';

describe('PokeEventComponent', () => {
  let component: PokeEventComponent;
  let fixture: ComponentFixture<PokeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
