import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignEComponent } from './sign-e.component';

describe('SignEComponent', () => {
  let component: SignEComponent;
  let fixture: ComponentFixture<SignEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
