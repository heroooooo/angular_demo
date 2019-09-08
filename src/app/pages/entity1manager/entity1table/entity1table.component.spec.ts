import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Entity1tableComponent } from './entity1table.component';

describe('Entity1tableComponent', () => {
  let component: Entity1tableComponent;
  let fixture: ComponentFixture<Entity1tableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Entity1tableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entity1tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
