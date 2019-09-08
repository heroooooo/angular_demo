import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity1managerComponent } from './entity1manager.component';

describe('Entity1managerComponent', () => {
  let component: Entity1managerComponent;
  let fixture: ComponentFixture<Entity1managerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Entity1managerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity1managerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
