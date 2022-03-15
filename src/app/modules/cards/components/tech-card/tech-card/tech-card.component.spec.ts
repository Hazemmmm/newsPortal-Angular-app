/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechCardComponent } from './tech-card.component';

describe('TechCardComponent', () => {
  let component: TechCardComponent;
  let fixture: ComponentFixture<TechCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
