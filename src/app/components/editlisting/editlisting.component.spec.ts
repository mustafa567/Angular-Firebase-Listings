/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditlistingComponent } from './editlisting.component';

describe('EditlistingComponent', () => {
  let component: EditlistingComponent;
  let fixture: ComponentFixture<EditlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
