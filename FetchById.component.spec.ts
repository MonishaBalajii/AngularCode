/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FetchByIdComponent } from './FetchById.component';

describe('FetchByIdComponent', () => {
  let component: FetchByIdComponent;
  let fixture: ComponentFixture<FetchByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
