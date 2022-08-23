import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothListsComponent } from './both-lists.component';

describe('BothListsComponent', () => {
  let component: BothListsComponent;
  let fixture: ComponentFixture<BothListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BothListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
