import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecommunicationComponent } from './servicecommunication.component';

describe('ServicecommunicationComponent', () => {
  let component: ServicecommunicationComponent;
  let fixture: ComponentFixture<ServicecommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
