import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchengineComponent } from './searchengine.component';

describe('SearchengineComponent', () => {
  let component: SearchengineComponent;
  let fixture: ComponentFixture<SearchengineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchengineComponent]
    });
    fixture = TestBed.createComponent(SearchengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
