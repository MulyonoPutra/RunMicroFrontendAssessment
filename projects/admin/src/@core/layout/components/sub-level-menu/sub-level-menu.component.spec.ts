import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubLevelMenuComponent } from './sub-level-menu.component';

describe('SubLevelMenuComponent', () => {
  let component: SubLevelMenuComponent;
  let fixture: ComponentFixture<SubLevelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLevelMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubLevelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
