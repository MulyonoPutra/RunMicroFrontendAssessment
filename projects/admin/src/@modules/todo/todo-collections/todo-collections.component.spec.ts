import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoCollectionsComponent } from './todo-collections.component';

describe('TodoCollectionsComponent', () => {
  let component: TodoCollectionsComponent;
  let fixture: ComponentFixture<TodoCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TodoCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
