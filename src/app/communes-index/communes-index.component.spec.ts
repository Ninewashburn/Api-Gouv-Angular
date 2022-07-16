import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunesIndexComponent } from './communes-index.component';

describe('CommunesIndexComponent', () => {
  let component: CommunesIndexComponent;
  let fixture: ComponentFixture<CommunesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
