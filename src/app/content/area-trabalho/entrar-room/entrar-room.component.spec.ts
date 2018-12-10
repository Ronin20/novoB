import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarRoomComponent } from './entrar-room.component';

describe('EntrarRoomComponent', () => {
  let component: EntrarRoomComponent;
  let fixture: ComponentFixture<EntrarRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
