import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  let component: BaseComponent<any>;
  let fixture: ComponentFixture<BaseComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
