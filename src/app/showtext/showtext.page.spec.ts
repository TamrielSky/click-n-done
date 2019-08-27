import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtextPage } from './showtext.page';

describe('ShowtextPage', () => {
  let component: ShowtextPage;
  let fixture: ComponentFixture<ShowtextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
