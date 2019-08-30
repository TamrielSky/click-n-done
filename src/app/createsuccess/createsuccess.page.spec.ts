import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesuccessPage } from './createsuccess.page';

describe('CreatesuccessPage', () => {
  let component: CreatesuccessPage;
  let fixture: ComponentFixture<CreatesuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
