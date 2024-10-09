import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusCardsComponent } from './aboutus-cards.component';

describe('AboutusCardsComponent', () => {
  let component: AboutusCardsComponent;
  let fixture: ComponentFixture<AboutusCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutusCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
