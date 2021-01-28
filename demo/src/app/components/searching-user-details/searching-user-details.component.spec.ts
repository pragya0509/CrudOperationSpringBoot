import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingUserDetailsComponent } from './searching-user-details.component';

describe('SearchingUserDetailsComponent', () => {
  let component: SearchingUserDetailsComponent;
  let fixture: ComponentFixture<SearchingUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
