import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloDetalleComponent } from './modelo-detalle.component';

describe('ModeloDetalleComponent', () => {
  let component: ModeloDetalleComponent;
  let fixture: ComponentFixture<ModeloDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
