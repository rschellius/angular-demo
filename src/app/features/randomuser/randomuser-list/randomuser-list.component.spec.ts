import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomuserListComponent } from './randomuser-list.component';

describe('RandomuserListComponent', () => {
  let component: RandomuserListComponent;
  let fixture: ComponentFixture<RandomuserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomuserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
