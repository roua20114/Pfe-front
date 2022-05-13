import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatTableComponent } from './candidat-table.component';

describe('CandidatTableComponent', () => {
  let component: CandidatTableComponent;
  let fixture: ComponentFixture<CandidatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
