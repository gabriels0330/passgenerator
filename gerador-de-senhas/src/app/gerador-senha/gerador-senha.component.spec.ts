import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorSenhaComponent } from './gerador-senha.component';

describe('GeradorSenhaComponent', () => {
  let component: GeradorSenhaComponent;
  let fixture: ComponentFixture<GeradorSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeradorSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeradorSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
