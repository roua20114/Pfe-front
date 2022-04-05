import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCadidatComponent } from './profil-cadidat.component';

describe('ProfilCadidatComponent', () => {
  let component: ProfilCadidatComponent;
  let fixture: ComponentFixture<ProfilCadidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCadidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCadidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
