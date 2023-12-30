import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavabarComponent } from './category-navabar.component';

describe('CategoryNavabarComponent', () => {
  let component: CategoryNavabarComponent;
  let fixture: ComponentFixture<CategoryNavabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryNavabarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryNavabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
