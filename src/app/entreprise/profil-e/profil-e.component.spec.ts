import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEComponent } from './profil-e.component';

describe('ProfilEComponent', () => {
  let component: ProfilEComponent;
  let fixture: ComponentFixture<ProfilEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
