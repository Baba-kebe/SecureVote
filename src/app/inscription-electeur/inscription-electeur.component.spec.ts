import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionElecteurComponent } from './inscription-electeur.component';

describe('InscriptionElecteurComponent', () => {
  let component: InscriptionElecteurComponent;
  let fixture: ComponentFixture<InscriptionElecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionElecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionElecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
