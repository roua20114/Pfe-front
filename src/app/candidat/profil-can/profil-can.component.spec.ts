import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCanComponent } from './profil-can.component';

describe('ProfilCanComponent', () => {
  let component: ProfilCanComponent;
  let fixture: ComponentFixture<ProfilCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
