import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCompteComponent } from './editer-compte.component';

describe('EditerCompteComponent', () => {
  let component: EditerCompteComponent;
  let fixture: ComponentFixture<EditerCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditerCompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
