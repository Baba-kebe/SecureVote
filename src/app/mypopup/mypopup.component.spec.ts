import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypopupComponent } from './mypopup.component';

describe('MypopupComponent', () => {
  let component: MypopupComponent;
  let fixture: ComponentFixture<MypopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MypopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
