import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratScreenComponent } from './strat-screen.component';

describe('StratScreenComponent', () => {
  let component: StratScreenComponent;
  let fixture: ComponentFixture<StratScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
