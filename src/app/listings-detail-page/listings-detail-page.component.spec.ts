import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ListingsDetailPageComponent } from './listings-detail-page.component';

xdescribe('ListingsDetailPageComponent', () => {
  let component: ListingsDetailPageComponent;
  let fixture: ComponentFixture<ListingsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ActivatedRoute],
      declarations: [ListingsDetailPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
