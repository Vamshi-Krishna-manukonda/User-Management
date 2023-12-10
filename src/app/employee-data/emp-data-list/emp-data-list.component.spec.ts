import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDataListComponent } from './emp-data-list.component';

describe('EmpDataListComponent', () => {
  let component: EmpDataListComponent;
  let fixture: ComponentFixture<EmpDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
