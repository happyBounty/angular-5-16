/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { My_homepageComponent } from './my_homepage.component';

describe('My_homepageComponent', () => {
  let component: My_homepageComponent;
  let fixture: ComponentFixture<My_homepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My_homepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My_homepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
