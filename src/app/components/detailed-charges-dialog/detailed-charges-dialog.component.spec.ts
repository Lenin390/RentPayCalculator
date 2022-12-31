import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedChargesDialogComponent } from './detailed-charges-dialog.component';

describe('DetailedChargesDialogComponent', () => {
  let component: DetailedChargesDialogComponent;
  let fixture: ComponentFixture<DetailedChargesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedChargesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedChargesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
