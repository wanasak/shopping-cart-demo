import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducQuantityComponent } from './produc-quantity.component';

describe('ProducQuantityComponent', () => {
  let component: ProducQuantityComponent;
  let fixture: ComponentFixture<ProducQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
